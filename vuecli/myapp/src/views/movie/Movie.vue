<template>
  <div>
    <ul>
      <li class="item-list clearfix" v-for="(item,index) in dataList" :key="index">
        <div class="list-left">
          <img :src="item.cover.url" alt="">
        </div>
        <div class="list-right">
          <h4>{{item.title}}</h4>
          <span v-for="(item,index) in item.actors" :key="index">{{item}}/</span>
         
        </div>
      </li>
    </ul>
    
  
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataList:[],
      listStart:0,
      isLoading:true
    }
  },

      
    
 
  created(){
    this.getData();
  },
  methods: {
    getData(){
      let proxy = 'https://bird.ioliu.cn/v2?url='
      let url = `https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=${this.listStart}&count=10`
      this.isLoading = false;
      axios.get(proxy+url)
       .then((res)=>{
        console.log(res.data.subject_collection_items);
        this.dataList = this.dataList.concat(res.data.subject_collection_items);
        this.isLoading = true;
      })
      .catch((res)=>{
        console.log('失败');
      })
    }
  },

}
</script>
<style scoped>
   ul{
    padding:10px;
  }
  .item-list{
    border-bottom: 1px solid #333;
    padding: 20px 0;
  }
  .item-list .list-left{
    float: left;
    width: 40%;
    text-align: center
  }
  .item-list .list-left img{
    width: 80%;
  }
  .item-list .list-right{
    float: left;
    width: 55%;
    padding-left:5%
  }
   
 
   
  .clearfix::after{
  content: "";
  display: block;
  clear: both;
}
  
</style>







