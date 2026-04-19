export * from './epg_pw';
// 垃圾源全部屏蔽
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
export * from './fenghuang';
export * from './Ainet';


import {
  epg_pw_sources,
  youhun_sources,
} from '.';
// 单独导入你的凤凰频道文件
import fenghuang_sources from './fenghuang.ts'
import Ainet_sources from './Ainet.ts'


export const sources = [
  ...fenghuang_sources, // 凤凰频道永远排最前面
  ...epg_pw_sources,
  ...Ainet_sources,
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
