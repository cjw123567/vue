const navbar = {
    "menus" : [ {
        "menuid" : "1",
        "icon" : "el-icon-menu",
        "menuname" : "加班單管理",
        "menus" : [ {
            "menuname" : "加班單審核",
            "icon" : "icon-nav",
            "index": "1-1",
            "url" : "Overtime/OT.show"
        },{
            "menuname" : "加班單-富強線長",
            "icon" : "icon-nav",
            "index": "1-2",
            "url" : "Overtime/OTByLL.show"
        },{
            "menuname" : "員工加班詳情",
            "icon" : "icon-nav",
            "index": "1-3",
            "url" : "ShowCheckOverTimeStatus"
        }, {
            "menuname" : "上下班刷卡記錄查詢",
            "icon" : "icon-nav",
            "index": "1-4",
            "url" : "ShowCheckSwipeCardRecords"
        }, {
            "menuname" : "上下班刷卡超15分鐘",
            "icon" : "icon-nav",
            "index": "1-5",
            "url" : "ShowCheckOverTime15min"
        },{
            "menuname" : "全天無刷卡人员查询",
            "icon" : "icon-nav",
            "index": "1-6",
            "url" : "ShowCheckForgetCard"
        },{
            "menuname" : "班别信息查询",
            "icon" : "icon-nav",
            "index": "1-7",
            "url" : "ShowCheckShiftStatus"
        },{
            "menuname" : "原始刷卡記錄查詢",
            "icon" : "icon-nav",
            "index": "1-8",
            "url" : "/member"
        },{
            "menuname" : "崗位津貼查詢",
            "icon" : "icon-nav",
            "index": "1-9",
            "url" : "/supplier"
        },{
            "menuname" : "員工職位維護",
            "icon" : "icon-nav",
            "index": "1-10",
            "url" : "/goods"
        },{
            "menuname" : "線別維護",
            "icon" : "icon-nav",
            "index": "1-11",
            "url" : "/defendLine"
        },{
            "menuname" : "未提報加班人員查詢",
            "icon" : "icon-nav",
            "index": "1-12",
            "url" : "NoCheckOvertime/ShowNoCheckOvertime"
        }]
    },{

        "menuid" : "2",
        "icon" : "el-icon-menu",
        "menuname" : "卡機刷卡設定",
        "menus" : [{
            "menuname" : "線組代碼對應的實時卡機設定",
            "icon" : "icon-nav",
            "index": "2-1",
            "url" : "/staff"
        },{

            "menuname" : "員工對應的實時卡機設定",
            "icon" : "icon-nav",
            "index": "2-2",
            "url" : "EmpIPBinding/ShowEmpIPBinding"
        }]
    },{
        "menuid" : "3",
        "icon" : "el-icon-menu",
        "menuname" : "車間門禁管理",
        "menus" : [ {
            "menuname" : "隨綫人員維護",
            "icon" : "icon-nav",
            "url" : "FlinePerson/ShowFlinePersonMaintain"
        },{
            "menuname" : "離崗卡與費用代碼綁定維護",
            "icon" : "icon-nav",
            "url" : "OTCardPerson/ShowOTCardbdPerson"
        },{

            "menuname" : "進出車間卡機IP維護",
            "icon" : "icon-nav",
            "url" : "IOCardBdIP/ShowIOCardbdIP"

        },{
            "menuname" : "進出車間臨時權限維護",
            "icon" : "icon-nav",
            "url" : "IOWorkShopPower/ShowIOWorkShopPwList"

        },{
            "menuname" : "保密車間臨時權限維護",
            "icon" : "icon-nav",
            "url" : "IOSpecialWSEmp/ShowIOSpecialWSEmp"
        },{
            "menuname" : "維護車間休息時間段",
            "icon" : "icon-nav",
            "url" : "WorkShopNoRest/ShowWorkshopNoRestInfo"

        },{
            "menuname" : "进出车间门禁記錄查詢",
            "icon" : "icon-nav",
            "url" : "IOWorkShop/ShowIOWorkShopRecord"

        },{
            "menuname" : "車間例外費用代碼維護",
            "icon" : "icon-nav",
            "url" : "ExceptionCost/ShowExceptionCost"

        },{
            "menuname" : "十四休一維護",
            "icon" : "icon-nav",
            "url" : "FourteenRO/ShowFourteenRO"

        },{
            "menuname" : "班別加班休息時間維護",
            "icon" : "icon-nav",
            "url" : "ClassNoRest/ShowClassNoRestInfo"

        }]
    },{

        "menuid" : "4",
        "icon" : "el-icon-menu",
        "menuname" : "綫體狀態維護",
        "menus" : [{
            "menuname" : "車間綫體維護",
            "icon" : "icon-nav",
            "url" : "WorkShopStatus/ShowWorkShopStatus"

        },{
            "menuname" : "車間員工權限維護",
            "icon" : "icon-nav",
            "url" : "EmpPrivilege/ShowEmpPrivilege"

        },{
            "menuname" : "產綫維護",
            "icon" : "icon-nav",
            "url" : "WSListStatus/ShowWSListStatus"

        }]
    },{

        "menuid" : "5",
        "icon" : "el-icon-menu",
        "menuname" : "人力管理",
        "menus" : [{
            "menuname" : "各綫人力統計",
            "icon" : "icon-nav",
            "url" : "CountEmp/ShowCountEmp"
        },{
            "menuname" : "刷卡人員異動",
            "icon" : "icon-nav",
            "url" : "ChangeEmployee/ShowChangeEmployee"
        },{
            "menuname" : "人力縂表-依課別",
            "icon" : "icon-nav",
            "url" : "CountEmpByCostID/ShowCountEmpByCostID"
        },{
            "menuname" : "排配機種",
            "icon" : "icon-nav",
            "url" : "ProdPerson/ShowProdPerson"
        },{
            "menuname" : "各課排配人力",
            "icon" : "icon-nav",
            "url" : "ProdAllLine/ShowProdAllLine"
        }]

    },{

        "menuid" : "6",
        "icon" : "el-icon-menu",
        "menuname" : "門禁管理",
        "menus" : [{
            "menuname" : "依課別-線別查詢",
            "icon" : "icon-nav",
            "url" : "QuertAbTimeByCostId/ShowQuertAbTimeByCostId"
        },{
            "menuname" : "依員工工號查詢",
            "icon" : "icon-nav",
            "url" : "QueryById/ShowQueryById"
        },{
            "menuname" : "實時及門禁刷卡查詢依工號",
            "icon" : "icon-nav",
            "url" : "QueryRecordById/ShowQueryRecordById"
        },{
            "menuname" : "異常原因回復",
            "icon" : "icon-nav",
            "url" : "AbReasonReply/ShowAbReasonReply"
        }]
    },{

        "menuid" : "7",
        "icon" : "el-icon-menu",
        "menuname" : "系統信息管理",
        "menus" : [ {
            "menuname" : "助理信息管理",
            "icon" : "icon-nav",
            "url" : "Assistant/ShowAllAssistant"
        }, {
            "menuname" : "賬號管理",
            "icon" : "icon-nav",
            "url" : "Account/ShowAllAccount"
        }, {
            "menuname" : "車間管理",
            "icon" : "icon-nav",
            "url" : "WorkShop/ShowAllWorkShop"
        }, {
            "menuname" : "人員信息查詢",
            "icon" : "icon-nav",
            "url" : "AdminActioin/ShowEmpInfo"
        }, {
            "menuname" : "廠區假日管理",
            "icon" : "icon-nav",
            "url" : "AdminActioin/ShowHolidayInfo"
        }, {
            "menuname" : "卡機ip綁定可刷卡費用代碼",
            "icon" : "icon-nav",
            "url" : "AdminActioin/ShowIpBindingCostSCInfo"
        }, {
            "menuname" : "頂崗津貼設置",
            "icon" : "icon-nav",
            "url" : "AdminBonusDepid/ShowAdminBonusDepid"
        }, {
            "menuname" : "實時工時卡機ip管控",
            "icon" : "icon-nav",
            "url" : "AdminActioin/ShowAppLoginInfo"
        }]
    }]
};

export default navbar