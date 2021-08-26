/**
 * 隐藏姓名
 * @param val { string } 脱敏数据
*/
export function hideCustomerName(val){
  if(val){
    return val.substr(0,1)+'**'
  }else{
    return ''
  }
}

/**
 * 数据脱敏
 * @param type { string } 脱敏数据类型 tel email birth
 * @param val { string } 脱敏数据
*/

export function formateSensData(type, val){
  if ( !val ) {
    return
  }
  if ( type === 'tel' ) {
    let reg = /^(\d{3})\d{4}(\d{4})$/;
    val = val.replace(reg, "$1****$2");
  } else if ( type === 'email' && val.indexOf('@') != -1 ) {
    val = val.split('@')[0].substr(0,1) + '****@' + val.split('@')[1]
  } else if ( type === 'birth' && val.indexOf('-') != -1 ) {
    val = val.split('-')[0] + '/**/**'
  } else if ( type === 'wechatNum' ) {
    val = val.substr(0,2) + '*'.repeat(val.length - 2)
  }
  return val
}

/**
 * 判断是否JSON串
 */
export function isJsonString(str) {
  try {
    if (typeof JSON.parse(str) === 'object') {
      return true;
    }
  } catch(e) {
  }
  return false;
}

/**
 * 生成随机id
 */
export function createRandomId() {
  return (Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
}