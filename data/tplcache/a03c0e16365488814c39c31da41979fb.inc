<li>
				{dede:type}
[field:id runphp=yes]
    $tsql = new DedeSql(false);
    $typelink2 = '';
    $tsql->SetQuery("Select i.typedir,i.id,i.typename From dede_arctype t left join dede_arctype i on i.id=t.reid where t.id='@me'");
    $tsql->Execute('t');
    while($row = $tsql->GetArray('t',MYSQL_ASSOC))
    {
       $typelink2 .= "<a href='".$row['typedir']."'>".$row['typename']."</a>";
    }
    @me=str_replace("{cmspath}","",$typelink2);
[/field:id]
{/dede:type}
				<div class="p_r">
					<a class="tit " href="/bk/al/13590.html" target="_blank" title="Ү³��ѧ¼ȡ�ݱ������Է���������">Ү³��ѧ¼ȡ�ݱ������Է���</a>
					<p>��Ȼѧ���ı�׼���ɼ�һ�㣬��������������У�ͨ����ľ����ʵ�ָ����ѧ�������ھ��������д�������飬����ȡ������Ľ��!</p>
				</div>
				<div class="clear"></div>
				<p class="p_b">
				��ǩ��
<a href= target="_blank">����</a><a href= target="_blank">������ѧEA����</a><a href= target="_blank">���</a>
				</p>
			</li>