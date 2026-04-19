export * from './epg_pw';
// 全部屏蔽垃圾乱源
// export * from './iptv_org';
// export * from './yang_m3u';
// export * from './yuechan_live';
// export * from './fanmingming_live';
// export * from './qwerttvv_bj_iptv';
// export * from './joevess_iptv';
// export * from './cymz6_lives';
export * from './youhun';
// export * from './zbds';
// export * from './hotel_tvn';
export * from './utils';
// 只导出你的凤凰频道
export * from './fenghuang';


import {
  epg_pw_sources,
  youhun_sources,
} from '.';

// 只导入你存在的凤凰频道文件
import fenghuang_sources from './fenghuang.ts';


export const sources = [
  ...fenghuang_sources, // 凤凰频道永远全集第一位
  ...epg_pw_sources,
  ...youhun_sources,
];

// 保留你原来全部高清/延迟排序/过滤规则
export const detectionConfig = {
  enable: true,
  timeout: 8000,
  maxLatency: 3000,
  minResolution: {
    width: 854,
    height: 480,
  },
  sort: ["resolution", "latency"],
  filterInvalid: true,
  deduplicate: true,
  filterDuplicateNames: true,
};
