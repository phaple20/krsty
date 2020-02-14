
<template>
  <div class="md-example-child md-example-child-scroll-view md-example-child-scroll-view-2" :style="{height: wh + 'px'}">
    <md-scroll-view
       ref="scrollView"
      :scrolling-x="false"
      @refreshing="$_onRefresh"
    >
       <md-scroll-view-refresh
        slot="refresh"
        slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
        :scroll-top="scrollTop"
        :is-refreshing="isRefreshing"
        :is-refresh-active="isRefreshActive"
      ></md-scroll-view-refresh>
      <div>
        <h1>{{ msg }}</h1>
        <h2>{{ placeholder }}</h2>
        <div class="md-example-child md-example-child-md-activity-indicator md-example-child-md-activity-indicator-0">
          <md-activity-indicator
            class="md-activity-indicator-css"
          >loading...</md-activity-indicator>
        </div>
        <div class="md-example-child md-example-child-switch md-example-child-switch-0">
          <md-switch
            v-model="isActive"
            @change="handler('switch0', isActive, $event)"
          ></md-switch>
        </div>
        <!-- <div class="section checkbox">
          <md-check-box name="day" v-model="type" label="Daily" disabled/>
          <md-check-box name="month" v-model="type" label="Monthly"/>
          <md-check-box name="season" v-model="type" label="Quarterly"/>
        </div> -->
        <div class="md-example-child md-example-child-button md-example-child-button-2">
          <md-button type="warning" @click="clickevent">warning</md-button>
        </div>
        <div class="md-example-child md-example-child-md-activity-indicator md-example-child-md-activity-indicator-2">
          <md-button type="primary" @click="createPay">
            <md-activity-indicator
              v-if="loading"
              class="md-activity-indicator-css"
              type="carousel"
              :size="15"
              color="#fff"
              text-color="#fff"
            ></md-activity-indicator>
            <span v-else>确认支付</span>
          </md-button>
        </div>
        <!--skeleton-->
        <div class="md-example-child md-example-child-skeleton md-example-child-skeleton-2">
          <md-field>
            <md-skeleton avatar title :loading="loading" :row="2" class="skeleton-item">
              <md-cell-item title="交通银行" brief="展示摘要描述" addon="附加文案" arrow>
                <span class="holder" slot="left"></span>
              </md-cell-item>
            </md-skeleton>
            <md-skeleton avatar title :loading="loading" :row="2" class="skeleton-item">
              <md-cell-item title="招商银行" brief="展示摘要描述" addon="附加文案" arrow>
                <span class="holder" slot="left"></span>
              </md-cell-item>
            </md-skeleton>
          </md-field>
        </div>
      </div>
    </md-scroll-view>
    
  </div>
</template>



<script>
import 'mand-mobile/lib/mand-mobile.css';
import _ from 'lodash';
import { ScrollView,Skeleton,Field,CellItem,ScrollViewRefresh,ActivityIndicator,Button,Switch,Toast } from 'mand-mobile';
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
_.orderBy(users,['user','age'],['desc','desc']);
console.log(_.map([1, 2, 3], function(n) { return n * 3; }));
console.log(_.join(['a','b','c'],'#'));
var user = {"data": [{"user":"tom"},{"user":"jack"}]};
var age = {"data": [{"age":12},{"age":20}]};
var result = _.merge(user,age)
console.log(result);
console.log(_.startsWith('afdsfd','s',3));

export default {
  name: 'HelloWorld',
  title: 'Hi',
  props: {
    msg: String
  },
  components: {
    [Skeleton.name]: Skeleton,
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [ScrollView.name]: ScrollView,
    [ScrollViewRefresh.name]: ScrollViewRefresh,
    [Button.name]: Button,
    [ActivityIndicator.name]: ActivityIndicator,
    [Switch.name]: Switch
  },
  data() {
    return {
      placeholder: "write!",
      loading: false,
      isActive: true,
      wh: window.innerHeight
    }
  },
  mounted() {
    window.startLoading = this.startLoading
    this.startLoading()
  },
  methods: {
    clickevent() {
      Toast.succeed("Success!");
    },
    createPay() {
      if(this.loading) {
        return
      }
      this.loading = true;
      setTimeout(()=> {
        this.loading = false
      },2000)
    },
    handler(name, active) {
      console.log(`Status of switch ${name} is ${active ? 'active' : 'inactive'}`);
    },
    $_onRefresh() {
      setTimeout(() => {
        this.list += 5
        this.$refs.scrollView.finishRefresh()
      }, 2000)
    },
    startLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
