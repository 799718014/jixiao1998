<?php
$z[0]=Array("id","\r\n    \$tsql = new DedeSql(false);\r\n    \$typelink2 = '';\r\n    \$tsql->SetQuery(\"Select i.typedir,i.id,i.typename From dede_arctype t left join dede_arctype i on i.id=t.reid where t.id='@me'\");\r\n    \$tsql->Execute('t');\r\n    while(\$row = \$tsql->GetArray('t',MYSQL_ASSOC))\r\n    {\r\n       \$typelink2 .= \"<a href='\".\$row['typedir'].\"'>\".\$row['typename'].\"</a>\";\r\n    }\r\n    @me=str_replace(\"{cmspath}\",\"\",\$typelink2);\r\n",23,468);
$z[0][4]['runphp']="yes";

?>