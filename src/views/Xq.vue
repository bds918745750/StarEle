<template>
  <ele-Xq :data="OederInfo.Xq_list"></ele-Xq>
</template>

<script>

import Xq from '../components/Order/Xq.vue';
import Xqs from '../apis/Xqs';

export default {
      name: "Xq",
      data() {
            return {
              OederInfo: {}
            };
          },
          created() {
            this._intOder();
          },
          methods: {
            _intOder() {
              Xqs.getOrderXq(data => {
                this.OederInfo = data;
                console.log(data);
              });
            }
          },
          components: {
            "ele-Xq": Xq
          }
      };
</script>

<style>
</style>
