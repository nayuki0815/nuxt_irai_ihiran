<template>
  <v-app>

<!-- サイドメニュードロワーはここから -->
<!-- カラーパレットhttps://material.io/design/color/the-color-system.html#tools-for-picking-colors -->

    <!-- ドロワーが上にはりつかない設定へ変更した -->
    <v-navigation-drawer
      color="#2d323e" 
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      fixed
      app
    >

      <v-list>
<!-- https://qiita.com/rubytomato@github/items/784a0eb013a9de1937bd -->      
<!-- v-list-itemテキストカラーの指定ができなかった -->
<!-- <v-list-item
        v-if="typeof page.items !== 'object'"
        :key="index"
        :to="page.to"
        :exact="page.exact"
      > -->
        <v-list-item
          class="tile"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          active-class="tile2"
        >

<!-- 参考になりそう：https://tech.windii.jp/frontend/nuxt/vuetify-tutorial#i-4 -->
<!-- アイコン -->
          <v-list-item-icon>
            <v-icon class="grey--text text--lighten-2">{{ item.icon }}</v-icon>
          </v-list-item-icon>

<!-- 案件一覧・各種設定 ここでテキストの色を直接指定した-->
          <v-list-item-content>
            <v-list-item-title class="grey--text text--lighten-2" v-text="item.title" />
            <v-list-item-subtitle class="grey--text" v-text="item.subtitle" />
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

<!-- サイドメニュードロワーはここまで -->


<!-- <!-- // マテリアルデザインのアイコンの一覧：https://materialdesignicons.com/ -->

  <!-- ここからアプリケーションバー -->
      <!-- temporary<--アプリケーションの一番上の層で表示させることが可能。サイドメニューの一部がヘッダーから隠れたりするのを防ぐ。--> -->
    <v-app-bar
      clipped-left
      fixed
      app
      temporary
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn
          icon
          @click.stop="miniVariant = !miniVariant"
        >
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon><!-- 右矢印・左矢印のアイコン（左から２番目） -->
        </v-btn>
      
        <!-- <v-btn
          icon
          @click.stop="clipped = !clipped"
        >
          <v-icon>mdi-application</v-icon><!-- 鞄のようなアイコン（右から２つめ） -->
        <!-- </v-btn> --> 
      
        <!-- <v-btn
          icon
          @click.stop="fixed = !fixed"
        >
          <v-icon>mdi-minus</v-icon><!-- マイナスのアイコン（一番左） -->
        <!-- </v-btn> --> 
      
        <v-toolbar-title v-text="title" />
        <v-spacer />
      
        <v-btn
          icon
          @click.stop="rightDrawer = !rightDrawer"
        >
          <v-icon>mdi-menu</v-icon><!-- 三本線のハンバーガーのアイコン（一番右） -->
        </v-btn>
        
    </v-app-bar>
<!-- アプリケーションバーはここまで -->

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    
<!-- 右のハンバーガー三本メニュー -->
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light><!-- リピートのアイコン -->
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!-- 右のハンバーガー三本メニューここまで -->

    <v-footer
      color="#Ff4081" 
      class="grey--text text--lighten-2" 
      :absolute="!fixed"
      app
    >
      <span>&copy;2020_y.nakano</span>
    </v-footer>
  </v-app>
</template>

<script>


// <!-- // このように変数を定義することでtemplateタグ内から変数を呼び出すことができます。https://yacchi-engineer.com/?p=1010#i-3 -->
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'ダッシュボード',
          to: '/dashborad'
        },
        {
          icon: 'mdi-folder-multiple-outline',
          title: '案件一覧',
          to: '/'
        },
        {
          icon: 'mdi-file-document',
          title: '契約情報一覧',
          subtitle: '（コミュニケーション）',
          to: '/keiyakulist'
        },
        {
          icon: 'mdi-home-city',
          title: '物件情報一覧',
          subtitle: '（コミュニケーション）',
          to: '/bukkenlist'
        },
        {
          icon: 'mdi-cog-outline',
          title: '各種設定',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
