<template>
    <div class="nav">
      <div class="left">
        <a href="http://localhost:8080/index">
        游戏<span>公园</span>
        </a>
      </div>
      <div class="right">
        <a href="http://localhost:8080/index">主页</a>
        <a href="http://localhost:8080/blog">博客</a>
        <a>关于我们</a>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data(){
      return {
        picItem : [
          require('@/assets/images/ba.jpg'),
          require('@/assets/images/ba1.jpg'),
          require('@/assets/images/ba2.jpg'),
          require('@/assets/images/ba3.jpg')
        ],
      }
    }
}
</script>

<style lang='less'>

  .nav {
    a{
      text-decoration: none;
      color: #fff;
    }
  }


  body{
    font-family: 'nobile';
  }
  .nav{
    background: #434343;
    color: white;
    height: 74px;
    line-height: 74px;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .left{
    margin: 0 0 1.3em;
    font-size: 2.63em;
    color: #fff;
    margin-left: 190px; 
    cursor: pointer;
    span{
      color: #EA4C89;
      margin-left: 10px;
    }

  }
  .right{
      position: absolute;
      right: 0;
      a:nth-last-child(1){
        margin-right: 210px;
      }
      a{
        text-decoration: none;
        font-size: 0.96em;
        margin: 0em 1.35em;
        cursor: pointer;
        &:hover{
          color: #EA4C89;
          transition: 0.5s all;
        }
      }
      a:first-child{
         color: #EA4C89;
      }
  }
</style>
