import {
  createMultiInstanceAgg,
  createPluginHelperByAggCreator,
} from 'vue-fn/domain-server';
import { Book } from './type-definition';

const aggMap: Record<string, ReturnType<typeof createAgg>> = {};

function createAgg(book: Book) {
  return createMultiInstanceAgg(book.id.toString(), ({ onScopeDispose }) => {
    onScopeDispose(() => {
      delete aggMap[book.id.toString()];
    });
    return {
      states: {},
    };
  });
}

export const BookAggPluginHelper = createPluginHelperByAggCreator(
  createAgg,
  () => {},
);

export function createBookAgg(book: Book) {
  const id = book.id.toString();
  if (aggMap[id]) {
    return aggMap[id];
  }
  const agg = createAgg(book);
  BookAggPluginHelper.registerAgg(agg);
  aggMap[id] = agg;
  return agg;
}
