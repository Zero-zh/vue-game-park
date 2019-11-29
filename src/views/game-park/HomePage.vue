<template>
    <div>
        <navigation></navigation>

        <div class="recommend-game">
            <h2>推荐游戏</h2>
            <div class="pics">
                <el-carousel :interval="4000" type="card" height="409px">
                    <el-carousel-item v-for="item in recommendGamePic" :key="item">
                    <h3 class="medium"><img :src="item"></h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <div class="new-game">
            <h3>最新游戏</h3>
            <div class="new-game-pic">
                <div class="new-game-pic-item" v-for="item in newGamePic" :key="item">
                    <div class="test">
                        <h5>Games</h5>
                        <span>领先的在线休闲游戏平台</span>
                    </div>
                    <img :src="item">
                </div>
            </div>
        </div>

        <bottom></bottom>
    </div>
</template>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script>
import navigation from '@/components/game-park/Navigation.vue'
import bottom from '@/components/game-park/Bottom.vue'
export default {
    name: 'HomePage',
    components: {
        navigation,
        bottom,
    },
    data() {
        return {
            recommendGamePic: [
                require('@/assets/images/1.png'),
                require('@/assets/images/2.png'),
                require('@/assets/images/3.png'),
                require('@/assets/images/4.png'),
                require('@/assets/images/5.png'),
                require('@/assets/images/6.png'),
            ],
            newGamePic: [
                require('@/assets/images/a1.jpg'),
                require('@/assets/images/a2.jpg'),
                require('@/assets/images/a3.jpg'),
                require('@/assets/images/a4.jpg'),
                require('@/assets/images/a5.jpg'),
                require('@/assets/images/a6.jpg'),
                require('@/assets/images/a7.jpg'),
                require('@/assets/images/a1.jpg'),
                require('@/assets/images/a2.jpg'),

            ],
        }
    },
}
</script>

<style lang='less' scoped>
    .recommend-game {
        width:100%;
        background: #EA4C89;
        height: 700px;
        box-sizing: border-box;
        h2{
            margin-top: 0;
            margin: 0 0 1.3em;
            font-size: 3.1em;
            color: #fff;
            font-family: 'Philosopher-Bold';
            font-weight: 500;
            line-height: 1.1;
            padding-top:50px;
        }
    }
    
    .new-game {
        h3{
            margin:0;
            color:black;
            margin: 0 0 0.5em;
            font-size: 3.1em;
            color: #000;
            font-family: 'Philosopher-Bold';
            text-align: center;
            font-weight: 500;
            line-height: 1.1;
            margin-top:50px;
            margin-bottom:30px;
        }
        margin-bottom: 30px;
    }

    .new-game-pic{
        font-size: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin:0 auto;
        margin-left:50px;
        margin-right:50px;
    }

    .new-game-pic-item {
        box-shadow: 0 1px 3px rgba(221, 221, 221, 1);
        padding: 8px;
        box-sizing: border-box;
        position: relative;
        margin-bottom: 9px;
        font-size: 0;
        overflow: hidden;
        & > div{
            position: absolute;
            top: 8px;
            left: -360px;
            height: 239px;
            width: 350px;
            background: rgb(219, 105, 149)+40%;
            transition: left 0.3s ease;
            overflow: hidden;
        }
        &:hover>div{
            left: 8px; 
            font-size: 14px;
            
            cursor: pointer;
            h5 {
                margin: 1.9em 0 0 0;
                color: #FFF;
                font-size: 2em;
                margin: 2.5em 0 0 0;
                font-family: 'Philosopher-Bold';
                text-align: center;
                margin-bottom: 15px;
            }
            span {
                font-size: 1.1em;  
                color:white;
            }
        }
        img{
            width:350px;
        }

    }
    .new-game-pic-item:nth-child(3n-1){
        margin-left:9px;
        margin-right:9px;
    }
    
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    // opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .pics {
      display: inline-block;
      width: 1200px;
  }
</style>