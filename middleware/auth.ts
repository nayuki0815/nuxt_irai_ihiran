
//ログインしていない場合はTopページ（というか全てのページ）にアクセスできない仕組み
//ログインされていないかつアクセスされたURLが/loginでない場合は強制的に/loginへリダイレクトさせてます。

import { Middleware } from '@nuxt/types'
import { auth } from '../plugins/firebase'

const middleware: Middleware = ({ route, store, redirect }) => {
  auth.onAuthStateChanged((user) => {
    if (!user && route.name !== 'login') redirect('/login')
  })
}
export default middleware


//ただ、このままではミドルウェアが反映されません。ミドルウェアの作成が終わったらnuxt.config,jsに下記を追記してやります。

