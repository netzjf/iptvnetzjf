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
// 只导出凤凰，彻底删除Ainet！！！
export * from './fenghuang';


import {
  epg_pw_sources,
  youhun_sources,
} from '.';

import fenghuang_sources from './fenghuang.ts';


export const sources = [
  ...fenghuang_sources,
  ...epg_pw_sources,
  ...youhun_sources,
];

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
