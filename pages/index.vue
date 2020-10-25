<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="6">
          テーブル作成のサンプル
        </v-col>

        <v-col cols="6">
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">

              <v-btn v-if="isLogin">ログアウト</v-btn>

              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                新規作成
              </v-btn>

            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="氏名"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.height"
                        label="身長(m)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.weight"
                        label="体重(kg)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.bodyFatPercentage"
                        label="体脂肪率(%)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  キャンセル
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  保存
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="検索"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="persons"
      :items-per-page="5"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deletePerson(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { auth } from '../plugins/firebase'

@Component({
  layout: 'default',
  components: {
  }
})
export default class IndexPage extends Vue {　　//IndexPageクラスという形でクラスベースに置き換えました。
  isLogin:boolean = false
  async mounted() {
    await auth.onAuthStateChanged((user) => this.isLogin = user ? true : false)
  }
  async logout() {
    await auth.signOut()
    this.$router.push('/login')
  }
}
</script>


<script lang="ts">
import Vue from "vue"

interface Persion {
  name: string
  height: number
  weight: number
  bodyFatPercentage: number
}

export default Vue.extend({
  data: () => ({
    dialog: false,
    search: "",
    editedIndex: -1,
    editedItem: {
      name: "",
      height: 0,
      weight: 0,
      bodyFatPercentage: 0
    },
    defaultItem: {
      name: "",
      height: 0,
      weight: 0,
      bodyFatPercentage: 0
    },

    headers: [
      {
        text: "氏名",
        value: "name",
        align: "start"
      },
      {
        text: "身長(m)",
        value: "height"
      },
      {
        text: "体重(kg)",
        value: "weight"
      },
      {
        text: "体脂肪率(%)",
        value: "bodyFatPercentage"
      },
      { text: "操作", value: "actions", sortable: false }
    ],
    persons: [
      {
        name: "naosuke.ii",
        height: 1.68,
        weight: 60,
        bodyFatPercentage: 15
      },
      {
        name: "iemochi.tokugawa",
        height: 1.7,
        weight: 61,
        bodyFatPercentage: 14
      },
      {
        name: "kaishu.katsu",
        height: 1.6,
        weight: 55,
        bodyFatPercentage: 12
      },
      {
        name: "eiichi.shibusawa",
        height: 1.63,
        weight: 65,
        bodyFatPercentage: 20
      },
      {
        name: "aritomo.yamagata",
        height: 1.75,
        weight: 63,
        bodyFatPercentage: 10
      },
      {
        name: "shigenobu.okuma",
        height: 1.8,
        weight: 68,
        bodyFatPercentage: 19
      },
      {
        name: "taro.okamoto",
        height: 1.72,
        weight: 63,
        bodyFatPercentage: 18
      },
      {
        name: "toshimichi.okubo",
        height: 1.82,
        weight: 70,
        bodyFatPercentage: 17.5
      },
      {
        name: "takamori.saigo",
        height: 1.9,
        weight: 80,
        bodyFatPercentage: 18
      },
      {
        name: "kaoru.inoe",
        height: 1.79,
        weight: 65.5,
        bodyFatPercentage: 12.3
      },
      {
        name: "yukichi.fukuzawa",
        height: 1.98,
        weight: 65,
        bodyFatPercentage: 10
      },
      {
        name: "yoshinobu.tokugawa",
        height: 1.75,
        weight: 58,
        bodyFatPercentage: 8
      },
      {
        name: "hideyo.noguchi",
        height: 1.56,
        weight: 50,
        bodyFatPercentage: 7
      },
      {
        name: "ichiyo.higuchi",
        height: 1.5,
        weight: 49,
        bodyFatPercentage: 20
      },
      {
        name: "soji.okita",
        height: 1.7,
        weight: 62,
        bodyFatPercentage: 13
      },
      {
        name: "isami.kondo",
        height: 1.75,
        weight: 68,
        bodyFatPercentage: 15
      }
    ]
  }),

  computed: {
    formTitle(): string {
      return this.editedIndex === -1 ? "新規作成" : "編集"
    }
  },

  methods: {
    deletePerson(item: Persion): void {
      const index = this.persons.indexOf(item)
      confirm(item.name + " を削除しますか？") && this.persons.splice(index, 1)
    },
    editItem(item: Persion) {
      this.editedIndex = this.persons.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.persons[this.editedIndex], this.editedItem)
      } else {
        this.persons.push(this.editedItem)
      }
      this.close()
    }
  }
})
</script>