export * from './epg_pw';
export * from './iptv_org';
export * from './yang_m3u';
export * from './yuechan_live';
export * from './fanmingming_live';
export * from './qwerttvv_bj_iptv';
export * from './joevess_iptv';
export * from './cymz6_lives';
export * from './youhun';
export * from './zbds';
export * from './hotel_tvn';
export * from './utils';

import {
  epg_pw_sources,
  // iptv_org_sources,
  // iptv_org_stream_sources,
  // yang_m3u_sources,
  // yuechan_live_sources,
  // fanmingming_live_sources,
  qwerttvv_bj_iptv_sources,
  // joevess_iptv_sources,
  // cymz6_lives_sources,
  youhun_sources,
  // zbds_sources,
  hotel_tvn_sources,
} from '.';

export const detectionConfig = {
  // 开启质量检测
  enable: true,

  // 超时时间（超过5秒的源直接丢掉）
  timeout: 5000,

  // 分辨率要求（低于480p自动屏蔽）
  minResolution: {
    width: 854,
    height: 480,
  },

  // 最大允许延迟（超过3000ms自动丢掉）
  maxLatency: 3000,

  // 排序规则：
  // 1. 分辨率高 → 靠前
  // 2. 延迟低 → 靠前
  sort: ["resolution", "latency"],

  // 自动去重
  deduplicate: true,

  // 自动过滤无效、无法播放的源
  filterInvalid: true,

  // 过滤重复频道名字
  filterDuplicateNames: true,
};
import Ainet from './AInet.ts'
import fenghuang from './fenghuang.ts'
