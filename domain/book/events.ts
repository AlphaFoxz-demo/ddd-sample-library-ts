import { createBroadcastEvent } from 'vue-fn/domain-server';

// 新书已入库
export const bookPutInStorage = createBroadcastEvent<{
  qrCode: string;
  isbn: string;
}>();
