Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@nayuki0815 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


takedasan
/
yukito
1
10
Code
Issues
Pull requests
5
Actions
Projects
Wiki
Security
Insights
yukito/app/layouts/default.vue
@takedasan
takedasan Add list and edit component
Latest commit eca4f22 on 21 Nov 2019
 History
 1 contributor
25 lines (25 sloc)  722 Bytes
  
<template>
  <el-container>
    <el-header height="30px">
      Yukito
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :router="true">
          <div style="margin-top: 10px;margin-bottom: 10px">
            <span>契約社員</span>
          </div>
          <el-menu-item index="/person/list" :route="{ path: `/person/list` }">
            契約社員一覧
          </el-menu-item>
          <el-menu-item index="/person/edit" :route="{ path: `/person/edit` }">
            契約社員編集
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="padding-top:0px">
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
