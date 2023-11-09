// locales.ts

// 假设所有本地化文件都遵循这个基本的键值对结构
// 导入本地化文件
import en from '../public/locales/en.json';
import zh from '../public/locales/zh.json';

interface LocaleMessage {
  [key: string]: string;
}
// ...其他语言

// 包装所有消息到一个对象，并导出
const messages: Record<string, LocaleMessage> = {
  en,
  zh,
  // ...其他语言
};

export default messages;
