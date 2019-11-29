<template>
  <div>
    <navigation></navigation>

    <div class="blog">
        <h3>博客</h3>
        <div class="blog-all">

            <div class="blog-item" v-for="(item,index) in all" :key="index">
            <!-- <div v-for="content in contents" :key="content"> -->
                <div class="item-img">
                    <img :src="item.blogPic">
                </div>
                <div class="item-text">
                    <h4>{{item.title}}</h4>
                    <p>{{item.contents}}</p>
                    <div class="detail">
                        <span>
                        <img :src="date">
                            22.02.2015
                        </span>
                        <a class="commnets">
                        <img :src="comment">
                            24
                        </a>
                    </div>
                </div>
                <div class="more-info">
                    <a><button>更多信息</button></a>
                </div>
            </div>
            </div>

      </div>

    <bottom></bottom>
  </div>
</template>

<script>
import navigation from "@/components/game-park/Navigation.vue";
import bottom from "@/components/game-park/Bottom.vue";
export default {
  name: "Blog",
  components: {
    navigation,
    bottom
  },
  data() {
    return {
    date: [
        require("@/assets/images/date.png"),
    ],
    comment: [
        require("@/assets/images/comment.png"),
    ],

    all : [
        {
            blogPic: require("@/assets/images/b1.jpg"),
            title:'超凡蜘蛛侠2',
            contents:'《超凡蜘蛛侠2 The Amazing Spider-Man 2》是一款 Gameloft 出品的动作游戏， 又名《蜘蛛人驚奇再起2》。游戏中，你将化身为惊奇蜘蛛人， 面对这位蛛丝射手最大的挑战！......',
        },
        {
            blogPic: require("@/assets/images/b2.jpg"),
            title:'赛尔号之勇者无敌',
            contents:'《赛尔号之勇者无敌》是一款由赛尔号动画片官方授权的酷爽横版格斗手游。 画面精美，角色造型细腻，还原度高，击打反馈强烈，技能华丽，战斗体验可圈可点。让我们一起出发吧！',
        },
        {
            blogPic: require("@/assets/images/b3.jpg"),
            title:'地铁跑酷(周年庆)',
            contents:'全球超人气跑酷手游《地铁跑酷》给你精彩、好玩的游戏体验。画面精致、操作流畅、玩法刺激、 滑板炫酷、角色丰富、特效绚丽……全民皆玩，全球3亿用户的共同选择，一路狂奔，环游世界，你会爱上它！',
        },
        {
            blogPic: require("@/assets/images/b4.jpg"),
            title:'蝙蝠侠',
            contents:'《蝙蝠侠 Batman》是一款以蝙蝠侠为主题的动作游戏，游戏里玩家将化身为蝙蝠侠维护哥谭市的治安。 不同于其他英雄人物，玩家除了惩治坏人外还需要为哥谭市的未来做出选择，',
        },
        {
                blogPic: require("@/assets/images/b5.jpg"),
                title:'愤怒的小鸟',
                contents:'《愤怒的小鸟(6周年版)》是一款风靡全球的物理解谜游戏。游戏中小鸟们为了报复偷走鸟蛋的猪， 鸟儿以自己的身体为武器，攻击猪们的堡垒。花好月圆夜鸟出没。开始游戏吧！',
        },
        {
                blogPic: require("@/assets/images/b6.jpg"),
                title:'时空召唤(新英雄马超)',
                contents:'《时空召唤》是一款以科幻为题材的竞技MOBA手游，由银汉游戏倾力打造，是《时空猎人》兄弟产品。不缩水的5V5大地图， 坚持平衡的游戏规则，原创的科幻英雄，纯粹的MOBA玩法。',
        }
    ],
    };
  }
};
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: rgb(255, 255, 255)-10%;
    }
    .blog {
        margin: 0 auto;
        width:1300px;
        margin-bottom: 30px;
    }
    .blog-item {
        box-sizing: border-box;
        border: 1px solid #ccc;
        width: 351px;
        height: 500px;
        display: inline-block;
        margin-bottom: 25px;
    }
    .blog-item:nth-child(3n-1){
        margin-left: 30px;
        margin-right: 30px;
    }
    img {
        width: 350px;
        height: auto;
    }
    h3 {
        margin-bottom: 35px; 
        font-size: 3.2em;
        font-family: 'Philosopher-Bold';
        text-align: center;
        font-weight: 500;
        line-height: 1.1;
        color: #000;
        padding-top: 50px;
    }
    h4{
        color: #E64B50;
        text-decoration: none;
        font-size: 1.1em;
        text-transform: uppercase;
        font-family: 'Philosopher-Bold';
        font-weight: 500;
        line-height: 1.1;
        text-align: left;
        padding: 15px;
    }
    .item-text p {
        font-size: 0.9em;
        padding-left: 14px;
        padding-right: 14px;
        text-align: left;
        overflow:auto;
        color: #7C7C7C;
        line-height: 1.7em;
        height: 120px;
        // margin: 0.8em 0;
    }
    .detail img {
        width:14px;
        height: 14px;
    }
    .detail {
        display: flex;
        flex-direction: row;
        padding-left: 14px;
        padding-right: 14px;
        margin-top: 10px;
    }
    .detail a{
        margin-left: 186px;
    }
    button {
        margin-top: 15px;
        border: none;
        padding: 10px;
        border-radius: 8px;
        color: #F56C6C;
        background: #FEF0F0;
        border:1px solid #F56C6C;
        &:hover {
            background: #F56C6C;
            color:white;
        }
    }
    h4,.item-img,.commnets,button{
        &:hover {
            cursor: pointer;
        }
    }
    .right{
        a:nth-child(2){
            color: #EA4C89;
        }
        a:nth-child(1){
            color: white;
            &:hover {
                color: #EA4C89;
            }
        }
    }
</style>