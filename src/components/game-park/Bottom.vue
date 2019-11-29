<template>
    <div class="bottom">
      <div class="line-one">
        <a>主页</a>
        <a>博客</a>
        <a>关于我们</a>
      </div>
      <div class="line-two">
        <p>
        游戏公园 | 设计 by <span>吉林省明日科技有限公司</span>
        </p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Bottom',
}
</script>

<style lang='less'>
body{
  font-family: 'nobile';
}
  .bottom {
    display: flex;
    flex-direction: column;
    background: #434343;
    font-size: 0;
  }
  .line-one {
    color:white;
    font-size: 14px;
    padding-top: 80px;
    padding-bottom: 20px;
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
  }
  .line-two {
    font-size: 14px;
    color:white;
    padding-bottom: 40px;
    p{
      text-decoration: none;
      font-size: 0.96em;    
    }
    span{
      color: #EA4C89;
      &:hover {
        color:white;
        cursor: pointer;
        transition: 0.5s all;
      }
    }
  }

</style>
