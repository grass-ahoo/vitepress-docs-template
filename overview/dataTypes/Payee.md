# 領款人

<i class="v-label data-type interface"></i> `Payee`

|欄位|名稱|類型|說明|
|---|---|---|---|
|資料編號|sno|`int`|
|身份證字號|bsn|`string(20)`||
|姓名|nam|`string(100)`||
|手機|phone|`string(20)`||
|國籍|isForeign|`int`|1. 本國籍<br/>2.外國籍(在台未滿183天)<br/>3.外國籍(在台滿183天)|
|⼾籍地址|addr|`string(250)`|
|通訊地址|contacT_ADDR|`string(250)`|
|收款帳戶|accounts|`payeeAccount[]`|
|有投保工會||`bool`|
|身分證正面圖片|iD_FRONT_URL|`string(250)`|
|身分證反面圖片|iD_BACK_URL|`string(250)`|
|投保公會證明圖片|iD_FRONT_URL|`string(250)`|