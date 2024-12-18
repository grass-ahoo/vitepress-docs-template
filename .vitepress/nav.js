export const sidebarData = [
  {
    text: '文件說明',
    link: '/docs-guideline.md',
  },
  {
    text: '<i class="psn">1</i> 總覽',
    collapsed: false,
    items: 
    [
      {
        text: '<i class="psn">1-1</i> 名詞定義',
        link: '/overview/names.md',
      },
      {
        text: '<i class="psn">1-2</i> 作業流程',
        link: '/overview/flows.md',
      },
      { 
        text: '<i class="psn">1-2</i> 資料格式',
        items: [
          {
            text: '<i class="v-label nav data-type interface"></i> 領款人',
            link: '/overview/dataTypes/Payee',
          },
          {
            text: '<i class="v-label nav data-type interface"></i> 領款人收款帳戶',
            link: '/overview/dataTypes/PayeeAccount',
          },
          {
            text: '<i class="v-label nav data-type enum"></i> 勞報單狀態',
            link: '/overview/dataTypes/ServiceFeeStatementStatus',
          },
          {
            text: '<i class="v-label nav data-type enum"></i> 所得類別',
            link: '/overview/dataTypes/IncomeType',
          },
        ]
      },
    ],
  },
  {
    text: '<i class="psn">2</i> 前端頁面',
    collapsed: false,
    items: 
    [
      { 
        text: '<i class="psn">2-1</i> 登入頁',
        link: '/frontend/loginPage',
      },
      { 
        text: '<i class="psn">2-2</i> 首頁',
        link: '/frontend/index',
      },
      { 
        text: '<i class="psn">2-3</i> 工作單',
        link: '/frontend/taskManagement/index',
        items: [
          {
            text: '<i class="psn">2-3-1</i> 工作單新增/編輯頁',
            link: '/frontend/taskManagement/addTaskPage',
          },
          {
            text: '<i class="psn">2-3-2</i> 工作單細節視窗',
            link: '/frontend/taskManagement/taskDetailDialog',
          }
        ],
      },
    ],
  },
  {
    text: '<i class="psn">3</i> API',
    collapsed: false,
    items: 
    [
      {
        text: '<i class="psn">3-1</i> 工作單管理',
        items: [
          { 
            text: '<i class="v-label nav api get"></i> 取得工作單列表',
            link: '/api/taskManagement/getTasks',
          },
          { 
            text: '<i class="v-label nav api get"></i> 取得工作單詳細資訊',
            link: '/api/taskManagement/getTaskDetail',
          },
          { 
            text: '<i class="v-label nav api post"></i> 新增工作單',
            link: '/api/taskManagement/addTask',
          },
          { 
            text: '<i class="v-label nav api put"></i> 修改工作單',
            link: '/api/taskManagement/updateTask',
          },
          { 
            text: '<i class="v-label nav api delete"></i> 刪除工作單',
            link: '/api/taskManagement/deleteTask',
          },
        ],
      },
    ],
  },
];