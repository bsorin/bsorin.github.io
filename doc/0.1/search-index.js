var searchIndex = {};
searchIndex['smtpapi'] = {"items":[[3,"Filter","smtpapi","",null,null],[3,"Header","","",null,null],[7,"VERSION","","",null,null],[11,"clone","","",0,{"inputs":[{"name":"filter"}],"output":{"name":"filter"}}],[11,"fmt","","",0,{"inputs":[{"name":"filter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"encode","","",0,{"inputs":[{"name":"filter"},{"name":"__s"}],"output":{"name":"result"}}],[11,"decode","","",0,{"inputs":[{"name":"filter"},{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"filter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"drop","","",0,{"inputs":[{"name":"filter"}],"output":null}],[11,"new","","Constructs a new `Filter`.",0,{"inputs":[{"name":"filter"}],"output":{"name":"filter"}}],[11,"add_setting","","Add settings for a `Filter`.",0,{"inputs":[{"name":"filter"},{"name":"s"},{"name":"s"}],"output":{"name":"filter"}}],[11,"to_string","","Returns the JSON String reprezentation of `Filter`.",0,{"inputs":[{"name":"filter"}],"output":{"name":"string"}}],[11,"to_json","","",0,{"inputs":[{"name":"filter"}],"output":{"name":"json"}}],[11,"clone","","",1,{"inputs":[{"name":"header"}],"output":{"name":"header"}}],[11,"fmt","","",1,{"inputs":[{"name":"header"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"encode","","",1,{"inputs":[{"name":"header"},{"name":"__s"}],"output":{"name":"result"}}],[11,"decode","","",1,{"inputs":[{"name":"header"},{"name":"__d"}],"output":{"name":"result"}}],[11,"drop","","",1,{"inputs":[{"name":"header"}],"output":null}],[11,"to_json","","Constructs the JSON reprezentation of `Header`.",1,{"inputs":[{"name":"header"}],"output":{"name":"json"}}],[11,"fmt","","",1,{"inputs":[{"name":"header"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Constructs a new `Header`.",1,{"inputs":[{"name":"header"}],"output":{"name":"header"}}],[11,"to_json_string","","Returns the JSON String reprezentation of `Header`.",1,{"inputs":[{"name":"header"}],"output":{"name":"string"}}],[11,"add_to","","It appends a single email to the To header",1,{"inputs":[{"name":"header"},{"name":"s"}],"output":{"name":"header"}}],[11,"add_tos","","It appends multiple emails to the To header",1,{"inputs":[{"name":"header"},{"name":"vec"}],"output":{"name":"header"}}],[11,"set_tos","","It sets the value of the To header",1,{"inputs":[{"name":"header"},{"name":"vec"}],"output":{"name":"header"}}],[11,"add_substitution","","It adds a new substitution to a specific key",1,{"inputs":[{"name":"header"},{"name":"s"},{"name":"s"}],"output":{"name":"header"}}],[11,"add_substitutions","","It adds a multiple substitutions to a specific key",1,{"inputs":[{"name":"header"},{"name":"s"},{"name":"vec"}],"output":{"name":"header"}}],[11,"set_substitutions","","It sets the value of the substitutions on the Sub header",1,{"inputs":[{"name":"header"},{"name":"hashmap"}],"output":{"name":"header"}}],[11,"add_section","","It sets the value for a specific section",1,{"inputs":[{"name":"header"},{"name":"s"},{"name":"s"}],"output":{"name":"header"}}],[11,"set_sections","","It sets the value for the Section header",1,{"inputs":[{"name":"header"},{"name":"hashmap"}],"output":{"name":"header"}}],[11,"add_category","","It adds a new category to the Category header",1,{"inputs":[{"name":"header"},{"name":"s"}],"output":{"name":"header"}}],[11,"add_categories","","It adds multiple categories to the Category header",1,{"inputs":[{"name":"header"},{"name":"vec"}],"output":{"name":"header"}}],[11,"set_categories","","It sets the value of the Categories field",1,{"inputs":[{"name":"header"},{"name":"vec"}],"output":{"name":"header"}}],[11,"add_unique_arg","","It sets the value of a specific unique argument",1,{"inputs":[{"name":"header"},{"name":"s"},{"name":"s"}],"output":{"name":"header"}}],[11,"set_unique_args","","It will set the value of the Unique_args header",1,{"inputs":[{"name":"header"},{"name":"hashmap"}],"output":{"name":"header"}}],[11,"add_filter","","It will set the specific setting for a filter",1,{"inputs":[{"name":"header"},{"name":"s"},{"name":"s"},{"name":"s"}],"output":{"name":"header"}}],[11,"set_filter","","It takes in a Filter struct with predetermined settings and sets it for such Filter key",1,{"inputs":[{"name":"header"},{"name":"s"},{"name":"filter"}],"output":{"name":"header"}}],[11,"set_ip_pool","","It sets the value of the IpPool field",1,{"inputs":[{"name":"header"},{"name":"s"}],"output":{"name":"header"}}],[11,"set_asm_group_id","","It will set the value of the ASMGroupID field",1,{"inputs":[{"name":"header"},{"name":"i32"}],"output":{"name":"header"}}],[11,"set_send_at","","It takes in a timestamp which determines when the email will be sent",1,{"inputs":[{"name":"header"},{"name":"i64"}],"output":{"name":"header"}}],[11,"add_send_each_at","","It takes in a timestamp and pushes it into a list. Must match length of To emails",1,{"inputs":[{"name":"header"},{"name":"i64"}],"output":{"name":"header"}}],[11,"set_send_each_at","","It takes an array of timestamps. Must match length of To emails",1,{"inputs":[{"name":"header"},{"name":"vec"}],"output":{"name":"header"}}]],"paths":[[3,"Filter"],[3,"Header"]]};
initSearch(searchIndex);
