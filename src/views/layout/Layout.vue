<template>
  <div class="home">
    <div class="header">
      <div class="content-wrapper">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search"/>
      </div>
    </div>
    <div ref="contentWrapper" class="content">
      <div class="content-wrapper">
        <!-- 分类 -->
        <div class="classify-wrapper">
          <ul class="classify">
            <li class="classify-item">
              <div>
                <svg-icon icon-class="taishi" class="icon"/>
              </div>
              <p class="list">态势感知</p>
            </li>
            <li class="classify-item">
              <div>
                <svg-icon icon-class="qunti" class="icon"/>
              </div>
              <p class="list">群体洞察</p>
            </li>
            <li class="classify-item">
              <div>
                <svg-icon icon-class="tais_sj" class="icon"/>
              </div>
              <p class="list">态势数据</p>
            </li>
            <li class="classify-item">
              <div>
                <svg-icon icon-class="qunt_sj" class="icon"/>
              </div>
              <p class="list">群体数据</p>
            </li>
          </ul>
        </div>
        <!-- 公告 -->
        <div class="bulletin-wrapper">
          <span class="bulletin-title"><svg-icon icon-class="gaoj" class="icon"/></span>
          <span class="bulletin-text">手机号139824844被告警命中，告警名称手机号139824844被告警命中，告警名称手机号139824844被告警命中，告警名称</span>
        </div>
        <!-- 态势案件 -->
        <div class="situationcase-wrapper">
          <div class="situationcase-title">
            <span class="title">态势案件</span>
            <span class="subtitle">群体案件</span>
          </div>
          <ul class="case">
            <li v-for="(value,index) in [1,2,3]" :key="index" class="case-item">
              <div><svg-icon icon-class="q1" class="icon"/></div>
              <div class="content">
                <div class="name">湖南省公安厅</div>
                <div class="desc">
                  <span class="count">案件号 9A757DGJK34V5JDG</span>
                  <span class="date">2018.04.23</span>
                </div>
              </div>
            </li>
          </ul>
          <div class="morecase">
            查看更多
          </div>
        </div>

        <!-- 态势感知 -->
        <div class="situationcase-wrapper">
          <div class="situationcase-title">
            <span class="title">态势感知</span>
            <span class="subtitle">群体洞察</span>
          </div>
          <ul class="case">
            <li
              v-for="(value,index) in [1,2,3]"
              :key="index"
              class="case-item"
              style="height: 148px;">
              <div><svg-icon icon-class="q2" class="icon"/></div>
              <div class="content">
                <div class="name">湖南省公安厅</div>
                <div class="text">MSISDN：8613501978189</div>
                <div class="text">IMSI：460006234567890</div>
                <div class="text">IMEI：109698888877777</div>
                <div class="desc">
                  <span class="date">2018.04.23</span>
                  <span class="detail"><el-button type="primary" size="mini" round>查看详情</el-button></span>
                </div>
              </div>
            </li>
          </ul>
          <div class="morecase">
            查看更多
          </div>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="tab">
        <div class="tab-item">
          <div><svg-icon icon-class="icon_home" class="icon"/></div>
          <p class="name">首页</p>
        </div>
        <div class="tab-item">
          <div><svg-icon icon-class="icon_qtts_selent" class="icon"/></div>
          <p class="name">态势感知</p>
        </div>
        <div class="tab-item">
          <div><svg-icon icon-class="icon_case_selent" class="icon"/></div>
          <p class="name">我的案件</p>
        </div>
        <div class="tab-item">
          <div><svg-icon icon-class="icon_me_select" class="icon"/></div>
          <p class="name">我的</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {}
    },
    mounted() {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      _initScroll() {
        this.meunScroll = new BScroll(this.$refs.contentWrapper, {
          click: true,
          propTypes: 3
        })
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";

  .home {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;

    .header {
      position: relative;
      overflow: hidden;
      top: 0;
      left: 0;
      width: 100%;

      .content-wrapper {
        height: 44px;
        padding: 4px 20px 4px 20px
      }
    }

    .content {
      position: relative;
      top: 0px;
      bottom: 60px;
      width: 100%;
      height: 540px;
      margin-top: 25px;
      overflow: hidden;

      .classify-wrapper {
        background: #fff;

        .classify {
          overflow: hidden;
          padding: 0;
          margin: 0;

          .classify-item {
            float: left;
            width: 25%;
            text-align: center;
            list-style: none;

            .icon {
              display: inline-block;
              width: 60px;
              height: 60px;
              line-height: 45px;
              text-align: center;
              border-radius: 50%;
              font-size: 18px;
              color: #fff;
            }

            .list {
              color: #333333;
              margin: 0;
              font-size: 14px;
            }
          }
        }
      }

      .bulletin-wrapper {
        position: relative;
        height: 20px;
        line-height: 20px;
        margin-top: 32px;
        padding: 0 20px 0 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: #fff;
        .bulletin-title {
          display: inline-block;
          vertical-align: top;
          width: 50px;
          height: 50px;
          /* @include bg-image('bulletin');*/
          background-size: 22px 12px;
          background-repeat: no-repeat;
          .icon {
            vertical-align: top;
          	width: 48px;
            height: 24px;
          }
        }

        .bulletin-text {
          display: inline-block;
          margin-top: 2px;
          height: 20px;
          line-height: 20px;
          vertical-align: top;
          font-size: 14px;
        }
      }

      .situationcase-wrapper {
        margin-top: 32px;

        .situationcase-title {
          padding-left: 16px;

          .title {
            font-size: 20px;
            line-height: 28px;
            color: #333333;
          }

          .subtitle {
            margin-left: 8px;
            font-size: 15px;
            line-height: 21px;
          }
        }

        .case {
          margin: 0;
          padding-left: 20px;
          padding-right: 16px;

          .case-item {
            display: flex;
            height: 64px;
            margin: 14px 0px 14px 0px;
            list-style: none;
            @include border-1px(rgba(7, 17, 27, 0.1));

            .icon {
              display: inline-block;
              vertical-align: top;
              margin-top: 10px;
              margin-right: 9px;
              width: 10px;
              height: 10px;
              /*背景图片设置必须是块元素*/
              background-size: 10px 10px;
              background-repeat: no-repeat;
            }

            .content {
              flex: 1;
              margin-top: 0;

              .name {
                margin: 2px 0 8px 0;
                height: 25px;
                line-height: 25px;
                font-size: 18px;
                color: #161619;
              }

              .text {
                height: 20px;
                line-height: 20px;
                font-size: 14px;
                color: #161619;

                &:last-child {
                  margin-bottom: 13px;
                }
              }

              .desc {
                margin-bottom: 8px;
                margin-top: 11px;

                .count {
                  margin-right: 59px;
                  line-height: 14px;
                  font-size: 14px;
                  color: #161619;
                }
                .detail {
                  display: inline;
                  margin-left: 160px;
                }

                .date {
                  line-height: 18px;
                  font-size: 13px;
                  color: #000000;
                }
              }
            }
          }
        }

        .morecase {
          margin: 18px 13px 26px 13px;
          height: 47px;
          line-height: 47px;
          text-align: center;
          background: #F2F3F7;
          font-size: 18px;
          color: #999999;
        }
      }
    }

    .tabs {
      position: fixed;
      left: 0px;
      bottom: 0px;
      z-index: 100;
      width: 100%;
      line-height: 55px;
      height: 55px;
      text-align: center;
      overflow: hidden;
      background: #F2F3F7;
      .tab {
        display: flex;
        width: 100%;
        height: 55px;
        .tab-item {
          flex: 1;
          text-align: center;
          font-size: 14px;

          .icon {
            width: 36px;
            height: 44px;
            margin-top: 0px;
          }

          .name {
          	margin-top: -50px;
            font-size: 10px;
          }
        }
      }
    }
  }
</style>
