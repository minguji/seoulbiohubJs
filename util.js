
Date.prototype.yyyymmdd = function(delimeter) {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
	var dd = this.getDate().toString();

	return yyyy + isUndefined(delimeter, '') + (mm[1] ? mm : "0" + mm[0])
			+ isUndefined(delimeter, '') + (dd[1] ? dd : "0" + dd[0]);
};

Date.prototype.yyyymm = function(delimeter) {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based

	return yyyy + isUndefined(delimeter, '') + (mm[1] ? mm : "0" + mm[0]);
};

Date.prototype.getYYYYMMDDHHMISS = function( delimeter ) {
	var yyyy = this.getFullYear().toString();
	var mm = ( this.getMonth() + 1 ).toString(); // getMonth() is zero-based
	var dd = this.getDate().toString();
	var hh = this.getHours().toString();
	var mi = this.getMinutes().toString();
	var ss = this.getSeconds().toString();

	return yyyy + isUndefined(delimeter, '') + (mm[1] ? mm : "0" + mm[0])
			+ isUndefined(delimeter, '') + (dd[1] ? dd : "0" + dd[0]) + " " + (hh[1] ? hh : "0" + hh[0]) + ":" + (mi[1] ? mi : "0" + mi[0]) + ":" + (ss[1] ? ss : "0" + ss[0]) ;
};

/**
 * ******************************************************************************************************
 */

/**
 * HashMap()
 */
var HashMap = function() {
	var mapVal = {}; // private
	var pos = new Array();

	this.get = function(key) {
		return mapVal[key];
	};

	this.getPos = function(n) {
		return mapVal[pos[n]];
	};

	this.getKey = function(n) {
		return pos[n];
	};

	this.getAllKey = function() {
		return pos;
	};

	this.remove = function(n) {
		var ary = new Array();
		for (var i = 0; i < pos.length; i++) {
			if (pos[i] != n) {
				ary.push(pos[i]);
			}
		}
		pos = ary;
	};

	this.put = function(key, val) {
		mapVal[key] = val;
		var flg = true;
		for (var i = 0; i < pos.length; i++) {
			if (key == pos[i])
				flg = false;
		}
		if (flg)
			pos.push(key);
	};

	this.size = function() {
		return pos.length;
	};
};

Map = function(){
	 this.map = new Object();
	};   
	Map.prototype = {   
	    put : function(key, value){   
	        this.map[key] = value;
	    },   
	    get : function(key){   
	        return this.map[key];
	    },
	    containsKey : function(key){    
	     return key in this.map;
	    },
	    containsValue : function(value){    
	     for(var prop in this.map){
	      if(this.map[prop] == value) return true;
	     }
	     return false;
	    },
	    isEmpty : function(key){    
	     return (this.size() == 0);
	    },
	    clear : function(){   
	     for(var prop in this.map){
	      delete this.map[prop];
	     }
	    },
	    remove : function(key){    
	     delete this.map[key];
	    },
	    keys : function(){   
	        var keys = new Array();   
	        for(var prop in this.map){   
	            keys.push(prop);
	        }   
	        return keys;
	    },
	    values : function(){   
	     var values = new Array();   
	        for(var prop in this.map){   
	         values.push(this.map[prop]);
	        }   
	        return values;
	    },
	    size : function(){
	      var count = 0;
	      for (var prop in this.map) {
	        count++;
	      }
	      return count;
	    }
	};
/**
 * ******************************************************************************************************
 */

/**
 * 
 */
$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [ o[this.name] ];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};
/**
 * ?????? ??????(Element)??? ?????? Elements(nodeType??? 1)??? ????????? ??????
 * @param parent
 * @returns {Array}
 */
function fun_getChildElements(parent) {
	var childs = new Array(), cnt = 0;

	if (parent.childNodes != null) {
		for (var i = 0; i < parent.childNodes.length; i += 1) {
			if (parent.childNodes[i].nodeType == 1) {
				childs[cnt] = parent.childNodes[i];
				cnt += 1;
			}
		}
	}

	return childs;
}
/**
 * ????????????????????? ??????????????????????????????.
 * @param el ????????????
 */
function fun_clearElement(el) {
	while (el.hasChildNodes()) {
		el.removeChild(el.firstChild);
	}
}

/**
 * ??????????????? undefined?????? defstr??? ??????.
 */
function isUndefined(obj, defstr) {
	var result;
	if (obj == null || typeof obj == "undefined") {
		result = defstr;
	} else {
		result = obj;
	}

	return result;
}

function isEmpty(obj, defstr) {
	var result;
	if (obj == null || typeof obj == "undefined" || obj == '') {
		result = defstr;
	} else {
		result = obj;
	}

	return result;
}

/* function : ????????????
 * param : String strVal
 */
function isNumber(strVal) {
	var v_str = new String(strVal);
	var j = 0;
	if (strVal == '')
		return true;

	for (var i = 0; i < v_str.length; i++) {
		if ((v_str.substring(i, i + 1) >= '0') && (v_str.substring(i, i + 1) <= '9'))
			j++;
	}

	if (j == v_str.length)
		return true;
	else
		return false;
}

function fun_roundXL(n, digits) {
	if (digits >= 0) return parseFloat(n.toFixed(digits)); // ????????? ?????????

	digits = Math.pow(10, digits); // ????????? ?????????
	var t = Math.round(n * digits) / digits;
	return parseFloat(t.toFixed(0));
}

/**
 * hhmmss -> hh?mm?ss ???????????? ??????.
 * @param strTime
 * @param strFormat
 * @returns {String}
 */
function fun_getHHMMSS(strTime, strFormat) {
	var result = '';
	if (strTime != null && strTime != '') {
		result += strTime.substring(0, 2);
		result += isUndefined(strFormat, '');
		result += strTime.substring(2, 4);
		result += isUndefined(strFormat, '');
		result += strTime.substring(4, 6);
	}

	return result;
}
/**
 * yyyymmdd -> yyyy?mm?dd ???????????? ??????.
 * @param strTime
 * @param strFormat
 * @returns {String}
 */
function fun_getYYYYMMDD(strTime, strFormat) {
	var result = '';
	if (strTime != null && strTime != '') {
		result += strTime.substring(0, 4);
		result += isUndefined(strFormat, '');
		result += strTime.substring(4, 6);
		result += isUndefined(strFormat, '');
		result += strTime.substring(6, 8);
	}

	return result;
}
/**
 * yyyymm -> yyyy?mm ???????????? ??????.
 * @param strTime
 * @param strFormat
 * @returns {String}
 */
function fun_getYYYYMM(strTime, strFormat) {
	var result = '';
	if (strTime != null && strTime != '') {
		result += strTime.substring(0, 4);
		result += isUndefined(strFormat, '');
		result += strTime.substring(4, 6);
	}

	return result;
}

/**
 * ?????? ?????? ??????(??????)
 * @param {} strDate
 * @param {} strFormat
 * @return {}
 */
function fun_getFormatTime(strDate, strFormat) {
	var result = '';
	var delimeter = isUndefined(strFormat, '');

	if (typeof strDate != "string") {
		var date = new Date(strDate), hours = date.getHours(), minutes = date.getMinutes(), second = date.getSeconds();

		result = fun_chNumerToStr(hours) + delimeter
				+ fun_chNumerToStr(minutes) + delimeter
				+ fun_chNumerToStr(second);

	} else {
		if (strDate == null || strDate == undefined || !strDate.length == 6) {
			return strDate;
		}

		strDate = strDate.replace('\:', '');

		// ????????? ????????????.
		result += strDate.substring(0, 2);

		if (strDate.length > 4) {
			result += delimeter;
			result += strDate.substring(2, 4);

			if (strDate.length > 6) {
				result += delimeter;
				result += strDate.substring(2, 4);
			}
		}
	}
	return result;
}

/**
 * ?????? ?????? ??????
 * @param {} strDate
 * @param {} strFormat
 * @return {}
 */
function fun_getFormatDate(strDate, strFormat) {
	var result = '';
	var delimeter = isUndefined(strFormat, '');

	if (typeof strDate != "string") {
		var date = new Date(strDate), year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();

		result = fun_chNumerToStr(year) + delimeter + fun_chNumerToStr(month) + delimeter + fun_chNumerToStr(day);

	} else {
		if (strDate == null || !(strDate.length == 6 || strDate.length == 8 || strDate.length == 14)) {
			return strDate;
		}

		// ????????? ????????????.
		result += strDate.substring(0, 4);

		if (strDate.length > 4) {
			result += delimeter;
			result += strDate.substring(4, 6);

			if (strDate.length > 6) {
				result += delimeter;
				result += strDate.substring(6, 8);
			}
		}
	}
	return result;
}

/**
 * ????????? 2?????? ??????????????? ??????
 * @param {} val
 * @return {}
 */
function fun_chNumerToStr(val) {
	val = (val == null) ? 0 : Number(val);

	var result = val;
	if (val < 10 && val > -1) {
		result = '0' + val;
	} else {
		result = '' + val;
	}

	return result;
}

/**
 * ????????? ????????? bytes ?????? ??????.
 * @param text
 * @param target
 */
function fun_length(text, target) {
	var msgtext = document.getElementById(text);
	document.getElementById(target).value = fun_getLength(msgtext.value);
}

/**
 * ????????? ????????? ????????? ????????????
 * @param {} str
 * @return {}
 */

function fun_getLength(str) {
	var length = 0;
	str = replaceAll(str, '\r', ' ');

	if (str != null && str != '') {
		length = (str.length + (escape(str) + '%u').match(/%u/g).length - 1);
	}
	return length;
}

function fun_loadScript(url, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";

	if (script.readyState) { // ????????? ???????????????
		script.onreadystatechange = function() {
			if (script.readyState == "loaded" || script.readySate == "complete") {
				script.onreadystatechange = null;
				callback();
			}
		}
	} else {
		script.onload = function() {
			callback();
		}
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

/*
 * ????????? ????????? ?????? option??? ???????????????.
 */
function selectbox_deletelist(targetid) {
	var targetObj = document.getElementById(targetid);
	for (i = targetObj.length; i > 0; i--) {
		targetObj.remove(i);
	}
}

function selectbox_deletealllist(targetid) {
	var targetObj = document.getElementById(targetid);
	for (i = targetObj.length; i >= 0; i--) {
		targetObj.remove(i);
	}
}

function selectbox_insert(obj, s_text, s_val, isSel) {
	obj.options[obj.length] = new Option(s_text, s_val, false, isSel);
}

function selectbox_insert_sel(obj, s_text, s_val, isSel) {
	obj.options[obj.length] = new Option(s_text, s_val, false, isSel);
}

/**
 * ????????? ?????? ???????????? ???????????????. 
 */
function selectbox_insertlist(targetid, list, selected, firstCode, firstName, delallyn) {
	var targetObj = document.getElementById(targetid);
	var info;
	// target??? ?????? ???????????? ???????????????.
	if(delallyn == undefined)
		selectbox_deletelist(targetid);
	else 
		selectbox_deletealllist(targetid);

	if (firstCode != undefined && firstName != undefined && firstName != '')
		selectbox_insert(targetObj, firstName, firstCode, false);

	// ????????? ???????????? ????????????.
	if (list != null && list.length > 0) {
		lstIndex = list.length;
		for (var i = 0; i < list.length; i++) {
			info = list[i];
			if (selected != undefined && selected != '' && info["code"] == selected)
				selectbox_insert(targetObj, info["codenm"], info["code"], true);
			else
				selectbox_insert(targetObj, info["codenm"], info["code"], false);
		}
	}
}

/**
 * ????????? ?????? ???????????? ???????????????. 
 */
function selectbox_direct_insertlist(targetid, list, selected, firstCode,
		firstName) {
	var targetObj = document.getElementById(targetid);
	var info;

	if (firstCode != undefined && firstName != undefined && firstName != '')
		selectbox_insert(targetObj, firstName, firstCode, false);

	// ????????? ???????????? ????????????.
	if (list != null && list.length > 0) {
		lstIndex = list.length;
		for (var i = 0; i < list.length; i++) {
			info = list[i];
			if (selected != undefined && selected != '' && info["code"] == selected)
				selectbox_insert(targetObj, info["codenm"], info["code"], true);
			else
				selectbox_insert(targetObj, info["codenm"], info["code"], false);
		}
	}
}

function selectbox_insertlist_sel(targetid, list, key) {

	var targetObj = document.getElementById(targetid);
	var info;
	// target??? ?????? ???????????? ???????????????.
	selectbox_deletelist(targetid);

	// ????????? ???????????? ????????????.
	if (list != null && list.length > 0) {
		lstIndex = list.length;
		for (var i = 0; i < list.length; i++) {
			info = list[i];
			if (info["code"] == key)
				selectbox_insert_sel(targetObj, info["codenm"], info["code"],
						true);
			else
				selectbox_insert_sel(targetObj, info["codenm"], info["code"],
						false);
		}

	}

}

getCommonCodeList = function(gubuncode, objid, selected, firstCode, firstName, asyncyn) {

	$.ajax({
		type : "POST",
		url : "/code/commonCodeList.do",
		async : asyncyn != undefined && asyncyn != null
				&& asyncyn == "N" ? false : true,
		dataType : 'json',
		data : {
			gubun : gubuncode
		},
		success : function(data, dataType) {
			if (data != null && data.list != null) {
				selectbox_insertlist(objid, data.list, selected,
						firstCode, firstName);
			}

		}
	});
}

getCodeList = function(purl, pdata, objid, selected, firstCode, firstName, asyncyn, delallyn) {

	$.ajax({
		type : "POST",
		url : purl,
		async : asyncyn != undefined && asyncyn != null
				&& asyncyn == "N" ? false : true,
		data : pdata,
		success : function(data, dataType) {
			if (data != null && data.list != null) {
				selectbox_insertlist(objid, data.list, selected, firstCode, firstName, delallyn);
			}
		}
	});
}

getCodeListStr = function(purl, pdata, selected, firstName) {

	var str = "";
	$.ajax({
		type : "POST",
		url : purl,
		async : false,
		data : pdata,
		success : function(data, dataType) {
			if(firstName != "" && firstName != "undefined")
			str += "<option value=''>- "+firstName+" -</option>"
			if (data != null && data.list != null) {
				var item = null;
				for(var i =0; i < data.list.length;i++){
			         item = data.list[i];
					str += "<option value='"+item.code +"' "+(item.code==selected?"selected":"")+">"+item.codenm+"</option>"
				}
			}			
		}
	});
	return str;
}

getJqgridCommonCodeList = function(gubuncode, firstCode, firstName) {
	var map = {};
	$.ajax({
		type : "POST",
		url : "/system/getCommonCodeList.do",
		async : false,
		global : false,
		dataType : 'json',
		data : {
			gubunCode : gubuncode
		},
		success : function(data, dataType) {
			if (data != null && data.list != null) {
				var list = data.list;
				if (list.length > 0 && firstName != null && firstName != "") {
					map[firstCode] = firstName;
				}

				for (var i = 0; i < list.length; i++) {
					map[list[i].code] = list[i].codeNm;
				}

				if (list.length > 0)
					return map;
				else
					null;
			}

		}
	});
}

getJqgridCodeList = function(purl, pdata, firstCode, firstName) {
	var map = {};
	$.ajax({
		type : "POST",
		url : purl,
		async : false,
		global : false,
		data : pdata,
		success : function(data, dataType) {
			if (data != null && data.list != null) {
				var list = data.list;
				if (list.length > 0 && firstName != null && firstName != "") {
					map[firstCode] = firstName;
				}

				for (var i = 0; i < list.length; i++) {
					map[list[i].code] = list[i].codeNm;
				}

				if (list.length > 0)
					return map;
				else
					null;
			}
		}
	});
}

setIdDisp = function(objnm, dispyn) {
	if (dispyn == 'H')
		$("[id=" + objnm + "]").hide();
	else
		$("[id=" + objnm + "]").show();
}

setClassDisp = function(objnm, dispyn) {
	if (dispyn == 'H')
		$("." + objnm).hide();
	else
		$("." + objnm).show();
}

valueValidator = function(object, j, objid, objnm) {
	var cms;
	var columnNames;
	if (objid != null) {
		cms = jQuery("#" + objid).jqGrid("getGridParam", "colModel");
		columnNames = $("#" + objid).jqGrid('getGridParam', 'colNames');
	} else {
		cms = jQuery("#list").jqGrid("getGridParam", "colModel");
		columnNames = $("#list").jqGrid('getGridParam', 'colNames');
	}
	var j = j + 1;
	var val;
	var edtrul;
	for ( var key in object) {
		for (var i = 0; i < cms.length; i++) {
			if (cms[i].name == key && cms[i].editrules != undefined) {
				val = object[key];
				edtrul = cms[i].editrules;
				if (edtrul.required === true) {
					if ($.jgrid.isEmpty(val)) {
						if (objnm != null) {
							$.jgrid.info_dialog($.jgrid.errors.errcap, objnm
									+ j + "??????" + columnNames[i]
									+ "???(???) ?????????????????????", $.jgrid.edit.bClose, "",
									j, i, objid);
						} else {
							$.jgrid.info_dialog($.jgrid.errors.errcap, j
									+ "?????? " + columnNames[i] + "???(???) ?????????????????????",
									$.jgrid.edit.bClose, "", j, i, objid);
						}
						return false;
					}
				}
			}
		}
	}
	return true;
}

/**
 * ?????? ???????????? ??????????????? ????????????.
 * @param str
 * @param orgStr
 * @param repStr
 * @returns
 */
function replaceAll(str, orgStr, repStr) {
	return str.split(orgStr).join(repStr);
}

/**
 * ????????? ??????
 * 
 * @param email
 * @return boolean
 */
function isEmail(email) {
	re = /[^@]+@[A-Za-z0-9_-]+[.]+[A-Za-z]+/;

	if (re.test(email)) {
		return true;
	}

	return false;
}

function convertDateType(selector) {

	var date = $("#" + selector).datepicker({
		dateFormat : "yy-mm-dd"
	}).val();
	var o_date = dateToObject(date);

	if (!isValidDate(o_date.toString1("-"))) {
		alert('????????? ????????? ????????????');
		$("#" + selector).focus();
		return false;
	}

	$("#" + selector).val(o_date.toString1("-"));
	$("#" + selector + "_month").val(o_date.year);
	$("#" + selector + "_day").val(o_date.month);
	$("#" + selector + "_year").val(o_date.day);
	return true;
}

/**
 * ???????????? date ?????? ????????? ?????? ?????? 
 * @param p_date
 * @returns {___anonymous64408_65436}
 */
function dateToObject(p_date) {
	var today = new Date();
	var cuyear = today.getFullYear();
	var curmonth = today.getMonth() + 1;
	if (p_date.length == 4) {
		p_date = cuyear + "" + p_date;
	} else if (p_date.length == 2) {
		p_date = cuyear + "" + curmonth + "" + p_date;
	}
	// if p_date is date value of string type
	var part_str_arr = [ "-", "/", ":", "." ];
	var v_date = p_date ? trim(p_date) : "";
	var v_result = {
		"year" : "",
		"month" : "",
		"day" : "",
		"hour" : "",
		"minute" : "",
		"second" : "",
		"toString1" : function(p_date_div) {
			var v_result = "";
			if (trim(this.year) != "")
				v_result += this.year;
			if (trim(this.month) != "")
				v_result += p_date_div + this.month;
			if (trim(this.day) != "")
				v_result += p_date_div + this.day;
			if (trim(this.hour) != "")
				v_result += " " + this.hour;
			if (trim(this.minute) != "")
				v_result += ":" + this.minute;
			if (trim(this.second) != "")
				v_result += ":" + this.second;
			return v_result;
		},
		"toString2" : function() {
			var v_result = "";
			if (trim(this.year) != "")
				v_result += "" + this.year;
			if (trim(this.month) != "")
				v_result += "" + this.month;
			if (trim(this.day) != "")
				v_result += "" + this.day;
			if (trim(this.hour) != "")
				v_result += "" + this.hour;
			if (trim(this.minute) != "")
				v_result += "" + this.minute;
			if (trim(this.second) != "")
				v_result += "" + this.second;
			return v_result;
		}
	};

	if (v_date == "")
		return v_result;

	for (var i = 0; i < part_str_arr.length; i++) {
		v_date = replaceAll(v_date, part_str_arr[i], " ");
	}

	for (var i = 0; i < 10; i++) {
		if (v_date.indexOf("  ") == -1)
			break;
		v_date = replaceAll(v_date, "  ", " ");
	}

	if (v_date) {
		if (v_date.indexOf(" ") != -1) {
			var v_date_arr = v_date.split(" ");
			v_result.year = v_date_arr[0] ? v_date_arr[0] : "";
			v_result.month = v_date_arr[1] ? v_date_arr[1] : "";
			v_result.day = v_date_arr[2] ? v_date_arr[2] : "";
			v_result.hour = v_date_arr[3] ? v_date_arr[3] : "";
			v_result.minute = v_date_arr[4] ? v_date_arr[4] : "";
			v_result.second = v_date_arr[5] ? v_date_arr[5] : "";
		} else {
			v_result.year = v_date.length >= 4 ? v_date.substring(0, 4) : "";
			v_result.month = v_date.length >= 6 ? v_date.substring(4, 6) : "";
			v_result.day = v_date.length >= 8 ? v_date.substring(6, 8) : "";
			v_result.hour = v_date.length >= 10 ? v_date.substring(8, 10) : "";
			v_result.minute = v_date.length >= 12 ? v_date.substring(10, 12)
					: "";
			v_result.second = v_date.length >= 14 ? v_date.substring(12, 14)
					: "";
		}
	}
	return v_result;
}

/**
 * trim
 * 
 * @param text
 * @return string
 */
function trim(text) {
	if (text == "") {
		return text;
	}

	var len = text.length;
	var st = 0;

	while ((st < len) && (text.charAt(st) <= ' ')) {
		st++;
	}

	while ((st < len) && (text.charAt(len - 1) <= ' ')) {
		len--;
	}

	return ((st > 0) || (len < text.length)) ? text.substring(st, len) : text;
}

function isValidDate(param) {
	try {
		if (param == '')
			return true;

		param = param.replace(/-/g, '');
		// ???????????? ???????????????
		if (isNaN(param) || param.length != 8) {
			return false;
		}

		var year = Number(param.substring(0, 4));
		var month = Number(param.substring(4, 6));
		var day = Number(param.substring(6, 8));
		var dd = day / 0;

		if (month < 1 || month > 12) {
			return false;
		}

		var maxDaysInMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
		var maxDay = maxDaysInMonth[month - 1];

		// ?????? ??????
		if (month == 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
			maxDay = 29;
		}

		if (day <= 0 || day > maxDay) {
			return false;
		}
		return true;

	} catch (err) {
		return true;
	}
}

/*
 * @param string grid_id ???????????? ????????? ???????????? ?????????
 * @param string div_id ???????????? ???????????? ????????? ????????? div ??? ?????????
 * @param string width ???????????? ????????? width ?????????
 */
function resizeJqGridWidth(grid_id, div_id, width) {
	// window??? resize ???????????? ????????? ??????.
	$(window).bind('resize', function() {
		// ???????????? width ?????????
		$('#' + grid_id).setGridWidth(width, false);
		// ???????????? width??? div ??? ????????? ??????
		$('#' + grid_id).setGridWidth($('#' + div_id).width(), false); //Resized to new width as per window
		$(".ui-jqgrid-htable").css("width", $('#' + div_id).width());
		$(".ui-jqgrid-btable").css("width", $('#' + div_id).width());
	}).trigger('resize');
}

Map = function() {
	this.map = new Object();
};
Map.prototype = {
	put : function(key, value) {
		this.map[key] = value;
	},
	get : function(key) {
		return this.map[key];
	},
	containsKey : function(key) {
		return key in this.map;
	},
	containsValue : function(value) {
		for ( var prop in this.map) {
			if (this.map[prop] == value)
				return true;
		}
		return false;
	},
	isEmpty : function(key) {
		return (this.size() == 0);
	},
	clear : function() {
		for ( var prop in this.map) {
			delete this.map[prop];
		}
	},
	remove : function(key) {
		delete this.map[key];
	},
	keys : function() {
		var keys = new Array();
		for ( var prop in this.map) {
			keys.push(prop);
		}
		return keys;
	},
	values : function() {
		var values = new Array();
		for ( var prop in this.map) {
			values.push(this.map[prop]);
		}
		return values;
	},
	size : function() {
		var count = 0;
		for ( var prop in this.map) {
			count++;
		}
		return count;
	}
};

/* ----------------------------------------------------------------------------
 * ?????? ????????? ?????? ????????? ????????? ??????(+-)??? ????????? ??????

 * 

 * ?????? ???????????? -----
 * pInterval : "yyyy" ??? ?????? ??????, "m" ??? ??? ??????, "d" ??? ??? ??????
 * pAddVal  : ?????? ????????? ?????? ??? (?????????)
 * pYyyymmdd : ????????? ????????? ?????? ??????
 * pDelimiter : pYyyymmdd ?????? ????????? ???????????? ?????? (????????? "" ??????)

 * 

 * ????????? ----

 * yyyymmdd ?????? ?????? ????????? ????????? ???????????? ????????? yyyy?mm?dd ???
 *

 * ????????? ---

 * 2008-01-01 ??? 3 ??? ????????? ==> addDate("d", 3, "2008-08-01", "-");

 * 20080301 ??? 8 ?????? ????????? ==> addDate("m", 8, "20080301", "");
 --------------------------------------------------------------------------- */
function addDate(pInterval, pAddVal, pYyyymmdd, pDelimiter) {
	var yyyy;
	var mm;
	var dd;
	var cDate;
	var oDate;
	var cYear, cMonth, cDay;

	if (pDelimiter != "") {
		pYyyymmdd = pYyyymmdd.replace(eval("/\\" + pDelimiter + "/g"), "");
	}

	yyyy = pYyyymmdd.substr(0, 4);
	mm = pYyyymmdd.substr(4, 2);
	dd = pYyyymmdd.substr(6, 2);

	if (pInterval == "yyyy") {
		yyyy = (yyyy * 1) + (pAddVal * 1);
	} else if (pInterval == "m") {
		mm = (mm * 1) + (pAddVal * 1);
	} else if (pInterval == "d") {
		dd = (dd * 1) + (pAddVal * 1);
	}

	cDate = new Date(yyyy, mm - 1, dd) // 12???, 31?????? ???????????? ???????????? ?????? ???????????? ????????? ????????? ????????????.
	cYear = cDate.getFullYear();
	cMonth = cDate.getMonth() + 1;
	cDay = cDate.getDate();

	cMonth = cMonth < 10 ? "0" + cMonth : cMonth;
	cDay = cDay < 10 ? "0" + cDay : cDay;

	if (pDelimiter != "") {
		return cYear + pDelimiter + cMonth + pDelimiter + cDay;
	} else {
		return cYear + cMonth + cDay;
	}

}

/**
 * ??????????????? ????????????.
 * 
 */
function getCurDate() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1; // 1???=0,12???=11????????? 1 ??????
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();

	if (("" + month).length == 1) {
		month = "0" + month;
	}
	if (("" + day).length == 1) {
		day = "0" + day;
	}
	if (("" + hour).length == 1) {
		hour = "0" + hour;
	}
	if (("" + min).length == 1) {
		min = "0" + min;
	}

	return ("" + year + month + day);
}

	function getAge(yyyymmdd) {
	//REQUIRED: yyyymmdd ????????? ?????????????????????. ???) 19800205
	var age; //????????? ??? ??????

	var yyyy = parseInt(String(yyyymmdd).substring(0,4),10);
	var mmdd = String(yyyymmdd).substring(4,6) + String(yyyymmdd).substring(6,8);

	var d = new Date();
	var tmonth = d.getMonth() + 1; //getMonth??? 0(1???)~11(12???)??? ???????????????.
	var tdate = d.getDate();

	//???????????? ???????????? ?????? ??????. ??? ????????? ??? ?????? 0??? ???????????????.
	var today = ((tmonth < 10)? '0' + tmonth : tmonth) + ((tdate < 10)? '0' + tdate : tdate);
	age = d.getFullYear() - yyyy + 1;
	
	//????????? ???????????? ???????????? ??????
	if (today < mmdd) {
		age = age - 2;
	} else {
		age = age - 1;
	}

	return age;
};

function jsNvl(str) {
	var result = "";
	if (str == undefined || str == null || str == "null" || str == "NULL") {
		result = "";
	} else {
		result = str;
	}

	return result;
}

function jsNvlTrim(str) {
	var result = "";
	if (str == undefined || str == null || str == "null" || str == "NULL") {
		result = "";
	} else {
		result = trim(str);
	}

	return result;
}


function jsNumnvl(str) {
	if (str == null || str == "") {
		return "0";
	}
	return str;
}
/**
 * ????????? comma??? ?????????.
 * 
 * @param str
 */
function addCommaStr(str) {
	if (str == "NaN")
		return "0";
	var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
	var arrNumber = str.split('.');
	arrNumber[0] += '.';
	do {
		arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
	} while (rxSplit.test(arrNumber[0]));

	if (arrNumber.length > 1) {
		replaceStr = arrNumber.join("");
	} else {
		replaceStr = arrNumber[0].split(".")[0];
	}
	return replaceStr;
}

function intcuttig(str1, unit) {
	var retuval = "";
	var temp = "";

	temp = str1 == "" ? "0" : str1;

	retuval = parseInt(parseInt(temp) / unit) * unit;

	return retuval;
}

function median(values) {
	values.sort(function(a, b) {
		return a - b;
	});
	var half = Math.floor(values.length / 2);
	if (values.length % 2) {
		return values[half];
	} else {
		return (values[half - 1] + values[half]) / 2.0;
	}
}

/**
 * ????????????
 * @param str
 * @returns
 */
function commaNum(str) {
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function addCommas(input) {
	if (input == undefined)
		return "";
	else
		// If the regex doesn't match, `replace` returns the string unmodified
		return (input.toString()).replace(
		// Each parentheses group (or 'capture') in this regex becomes an argument 
		// to the function; in this case, every argument after 'match'
		/^([-+]?)(0?)(\d+)(.?)(\d+)$/g, function(match, sign, zeros, before,
				decimal, after) {

			// If a digit has 3 digits after it, replace it with itself plus a comma
			var insertCommas = function(string) {
				return string.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
			};

			// If there was no decimal, the last capture grabs the final digit, so
			// we have to put it back together with the 'before' substring
			return sign
					+ (decimal ? insertCommas(before) + decimal + after
							: insertCommas(before + after));
		});
}

// sortByKey ????????? ???????????????????????? ???????????? sort??? ???????????? ??????
function sortByKey(array, key, order, isnumber) {
	return array.sort(function(a, b) {
		var x = isnumber ? parseFloat(a[key]) : a[key];
		var y = isnumber ? parseFloat(b[key]) : b[key];
		if (order == "desc")
			return ((x > y) ? -1 : ((x < y) ? 1 : 0));
		else
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
}

/*
 * gridid : jqgrid ?????? ?????? id, colcnt : jqgrid??? ???????????? ????????????(hidden??????) 
 */
function showJqgridDataNon(data, jqgridid, colcnt) {
	if (data.rows.length == 0) {
		$("#" + jqgridid + " >tbody").append(
				"<tr><td align='center' colspan='" + colcnt
						+ "'>?????? ????????? ????????????.</td></tr>");
	}
}

/**
 * ????????? ??????
 */
function linkHelpManage(programCode) {

	if($('#content_rti').length > 0) 
		$('#content_rti').append('<div class="modal fade" id="modal-preview"></div>');
	else
		$('#content').append('<div class="modal fade" id="modal-preview"></div>');
	
	$.ajax({
		type : "POST",
		url : "/getPopupHelpManage.do",
		data : {
			programCode : programCode
		},
		dataType : 'json',
		success : function(data) {
			console.log(data);
			var helpPageList = data.helpPageList;
			if (helpPageList.length > 0) {
				var row_id = helpPageList[0].fileId;
				$.ajax({
					type : "POST",
					url : "/getPreviewContents.do",
					data : {
						row_id : row_id
					},
					dataType : 'html',
					success : function(data) {
						$('#modal-preview').html(data);
						$('#modal-preview').css("z-index", 9999);
						$('.modal-title')[0].innerHTML = '?????????';
						$('#modal-preview').modal();
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert("??????????????? ??????????????? ?????????????????????.");
					}
				});
			} else {
				alert("????????? ?????????????????? ????????????.");
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("????????? ??????????????? ??????????????? ?????????????????????.");
		}
	});
}

/**
 * ????????? ??????
 */
function helpTooltip(toolTipId, programCode, tooltipCode) {
	var selector = $('#' + toolTipId);
	$.ajax({
		url : "/getHelpControlInfo.do",
		type : "POST",
		dataType : 'json',
		data : {
			menuProgramCd : programCode,
			componentCd : tooltipCode
		},
		success : function(data) {
			if (data != null) {
				var helpControlInfo = data.helpControlInfo;
				if (helpControlInfo != null) {
					var returnVal = helpControlInfo.tooltipText;
					selector.attr({
						"title" : returnVal
					});
				}
			} else {
				return " ";
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("?????? ????????? ??????????????? ?????? ???????????????.");
		}
	});
}


/**
 * <pre>
 * ?????? ?????? ??????
 * </pre>
 * 
 * <code>
 * type: d, sDateStr: 2015-01-01, eDateStr: 2015-01-30 ==> ?????? : 29<br />
 * type: d, sDateStr: 2015-02-01, eDateStr: 2015-01-30 ==> ?????? : -2<br />
 * 
 * type: m, sDateStr: 2015-01-01, eDateStr: 2015-04-01 ==> ?????? : 3<br />
 * type: m, sDateStr: 2015-01-21, eDateStr: 2015-05-01 ==> ?????? : 4<br />
 * 
 * type: y, sDateStr: 2015-01-01, eDateStr: 2015-01-30 ==> ?????? : 0<br />
 * type: y, sDateStr: 2015-02-01, eDateStr: 2017-01-30 ==> ?????? : -2<br />
 * </code>
 * <br />
 * 
 * @author P081305
 * @param type: ?????? ??????, D - ???, M - ???, Y - ???
 * @param sDate: ?????? ??????
 * @param eDate: ?????? ??????
 * @return Number: ?????? ??????, ?????? - ?????? > ??????, 0 - ??????, ?????? - ?????? < ??????
 * 
 * */
var getDifferenceDate = function( type, sDateStr, eDateStr ) {
	var sDate = new Date( sDateStr );
	var eDate = new Date( eDateStr );
	
	if ( isEmpty(type, "") !== "" ) {
		if ( type.toUpperCase() === "Y" ) { // ??? ??????
			return parseInt( (( eDate.getFullYear() - sDate.getFullYear() ) * 12 + ( eDate.getMonth() - sDate.getMonth() )) / 12 );
		} else if ( type.toUpperCase() === "M" ) { // ??? ??????
			return ( eDate.getFullYear() - sDate.getFullYear() ) * 12 + ( eDate.getMonth() - sDate.getMonth() );
		} else { // ??? ??????
			return ( eDate.getTime() - sDate.getTime() ) / 1000 / 60 / 60 / 24;
		}
	}
};

/**
 * <pre>
 * JqGrid ?????? Select Box ??????
 * Load Complete ??? ????????? ?????? ????????? ?????? ??? ?????? ??????
 * </pre>
 * 
 * @author P081305
 * @param gridID: JQGrid ID
 * @param colName: Select Box??? ?????? ?????????
 * @param codeGroup: ????????? ?????? ??????
 * @param URL: ???????????? ?????? ????????? ????????? ??? ???????????? URL
 * */
var getCodeListToJqGrid = function( gridID, colName, codeGroup, URL, startText ) {
	var thisUrl = URL || "/system/getCommonCodeList.do";
	
	$.ajax({
		url: thisUrl
		, type: "POST"
		, async: false
		, global: false
		, dataType: "json"
		, data: {
			gubunCode: codeGroup
		}
		, success: function( data ) {
			var codeList = data.list;
			setCodeListToJqGrid( gridID, colName, codeList, null, null, startText );
		}
	});
}


var getListToJqGrid = function( gridID, colName, postdata, URL, startText ) {
	//debugger;
	var thisUrl = URL;
	$.ajax({
		url: thisUrl
		, type: "POST"
		, async: false
		, global: false
		, dataType: "json"
		, data: {
			data : postdata
		}
		, success: function( data ) {
			//debugger;
			var codeList = data.list;
			setCodeListToJqGrid( gridID, colName, codeList, null, null, startText );
		}
	});
}

// ?????? ??????....????????? ??????...

var getListToJqGridRow = function( gridID, colName, postdata, URL, startText ) {
	//debugger;
	var thisUrl = URL;
	$.ajax({
		url: thisUrl
		, type: "POST"
		, async: false
		, global: false
		, dataType: "json"
		, data: {
			data : postdata
		}
		, success: function( data ) {
			//debugger;
			var codeList = data;
			setCodeListToJqGridRow( gridID, colName, codeList, null, null, startText );
			
		}
	});
}


var setCodeListToJqGridRow = function( gridID, colName, codeList, key, value, startText ) {
	//debugger;
	var thisCode = key || "code";
	var thisCodeNm = value || "codeNm";
	var thisStartText = startText || "";

	var codeListLen = codeList.length;
	var codeStr = ":" + thisStartText + ";";
	
	for( var idx = 0; idx < codeListLen; idx++ ) {
		var code = codeList[ idx ];
		codeStr += code[thisCode] + ":" + code[thisCodeNm];
		
		if( (idx + 1) !== codeListLen ) {
			codeStr += ";";
		}
	}
	
	convertColList(codeStr);
	
	/*var setCol = $( "#" + gridID ).getColProp( colName );
	setCol.editoptions = {
		value: codeStr
	}
    
	$("#jqgrid-filter-field").jqGrid('setCell', rowid, 'dim_list', "<select><option>aaa</option></select>")
	
	$( "#" + gridID ).setColProp( colName, setCol );*/
}

/**
 * <pre>
 * JqGrid ?????? Select Box ??????
 * Load Complete ??? Data ?????? ????????? List??? ??????
 * </pre>
 * 
 * @author P081305
 * @param gridID: JQGrid ID 
 * @param colName: Select Box??? ?????? ?????????
 * @param codeList: ????????? ?????? ?????????
 * @param key: ???????????? ?????? ????????? ????????? ??? ???????????? ?????? ID???
 * @param vaule: ???????????? ?????? ????????? ????????? ??? ???????????? ?????? Name ???
 * */
var setCodeListToJqGrid = function( gridID, colName, codeList, key, value, startText ) {
	//debugger;
	var thisCode = key || "code";
	var thisCodeNm = value || "codeNm";
	var thisStartText = startText || "";

	var codeListLen = codeList.length;
	var codeStr = ":" + thisStartText + ";";
	
	for( var idx = 0; idx < codeListLen; idx++ ) {
		var code = codeList[ idx ];
		codeStr += code[thisCode] + ":" + code[thisCodeNm];
		
		if( (idx + 1) !== codeListLen ) {
			codeStr += ";";
		}
	}
	
	var setCol = $( "#" + gridID ).getColProp( colName );
	
	if( isEmpty( setCol.editoptions, "" ) != "" ) {
		setCol.editoptions["value"] = codeStr;
	} else {
		setCol.editoptions = {
			value: codeStr
		}		
	}

	$( "#" + gridID ).setColProp( colName, setCol );
}

/**
 * <pre>
 * Popup ?????? ??? ???????????? ??????
 * </pre>
 * 
 * @author P081305
 * @param URL: ?????? ??????
 * @param targetDivID: ?????? DIV
 * @param dataObj: parameter ?????????
 * */
var showTargetPopup = function( URL, targetDivID, dataObj ) {
	var targetDiv = $("<div>");
	$( targetDiv ).attr( "id", targetDivID );

	$("body").append( targetDiv );

	$.ajax({
		url: URL
		, type: "POST"
		, target: "#" + targetDivID
		, dataType: "html"
		, data: dataObj
		, success: function( data ) {
			$("#" + targetDivID).html( data );

			$("#" + targetDivID + " > .modal.fade").on(
				"hidden.bs.modal"
				, function( evt ) {
					var thisDivID = evt.target.id;
					var thisParentDivID = thisDivID + "Div";
					
					if( targetDivID === thisParentDivID ) {
						$("#" + targetDivID).remove();	
					}
				}
			);
		}
	});
};

/**
 * <pre>
 * JqGrid Width ??? ????????????
 * </pre>
 * 
 * @author P081305
 * @param targetGridID: ???????????? ??? ?????? JqGrid ID
 * @param targetGridParentID: ???????????? ??? ?????? JqGrid??? ????????? ?????? Div ????????? ID
 * */
var setResizeJqGridWidth = function( targetGridID, targetGridParentID ) {
	$(window).resize(function( evt ) {
		var parentDivWidth = $("#" + targetGridParentID).parent().width();
		$("#" + targetGridID).setGridWidth( parentDivWidth - 2 );
	}).trigger( "resize" );
};

/**
 * <pre>
 * JqGrid Cell Save
 * </pre>
 * 
 * @author P081305
 * @param targetGridID: Cell ?????? ????????? JqGrid ID
 * */
var setSaveJqGridCell = function( targetGridID ) {
	var targetGrid = $("#" + targetGridID);
	var targetGridParameter = targetGrid.getGridParam();
	var targetRow = targetGridParameter.iRow || "";
	var targetCol = targetGridParameter.iCol || "";

	if( targetRow !== "" && targetCol !== "" ) {
		targetGrid.saveCell( targetRow, targetCol );
	}};

/**
 * <pre>
 * String Replace All Function
 * </pre>
 * 
 * @author P081305
 * @param sourceStr: ????????? ?????? ?????????
 * @param targetStr: ????????? ?????????
 * */
String.prototype.replaceAll = function( sourceStr, targetStr ){
    var temp_str = "";
    var temp_trim = this.replace(/(^\s*)|(\s*$)/g, "");

    if ( temp_trim && sourceStr != targetStr ) {
        temp_str = temp_trim;
        while ( temp_str.indexOf( sourceStr ) > -1 ) temp_str = temp_str.replace( sourceStr, targetStr );
    }

    return temp_str;
};

/**
 * <pre>
 * ????????? ?????? ?????? ??????
 * </pre>
 * 
 * @author P081305
 * @param sourceID: ?????? ????????? ????????? Text Area ID
 * @param sourceStr: ?????? ?????????
 * @param maxByte: ?????? Byte
 * @param resultLengthID: ????????? ???????????? ????????? ????????? Input Box ID
 * */
var getByteLength = function ( sourceID, sourceStr, maxByte, resultLengthID ) {
	var byteLen = 0;
	var ch;
	var resultStr = "";
	
	if ( sourceStr === "" ) {
		if ( isEmpty( resultLengthID, "" ) != "" ) {
			$("#" + resultLengthID).val( 0 );
		}
	}

	for ( var i = 0; i < sourceStr.length; i++ ) {
		ch = sourceStr.charCodeAt(i);
		len = ch >> 11 ? 3 : ch >> 7 ? 2 : 1;

		if ( ( len + byteLen ) > maxByte ) {
			$( "#" + sourceID ).val( resultStr );
			return false;
		} else {
			byteLen += len;
		}

		if ( isEmpty( resultLengthID, "" ) != "" ) {
			$("#" + resultLengthID).val( byteLen );
		}

		resultStr += sourceStr[i];
	}
};

/**
 * <pre>
 * ????????? ?????? ?????? ??????
 * </pre>
 * 
 * @author P081305
 * @param sourceStr: ?????? ????????? ?????????
 * @param maxLength: ?????? ??????
 * @return rstFlag: ?????? ?????? ??????, ?????? ???????????? ????????? true, ?????? false
 * */
var checkByteLength = function ( sourceStr, maxLength ) {
	var byteLen = 0;
	var ch;
	var rstFlag = true;
	
	if( maxLength < 0 ) {
		return rstFlag;
	}

	for ( var i = 0; i < sourceStr.length; i++ ) {
		ch = sourceStr.charCodeAt(i);
		len = ch >> 11 ? 3 : ch >> 7 ? 2 : 1;

		byteLen += len;
		if ( byteLen > maxLength ) {
			rstFlag = false;
		}
	}
	
	return rstFlag;
};

/**
 * <pre>
 * ?????? ?????? trim ??????
 * ?????? ?????? ?????? ?????? ???????????? ?????? ??????????????? ?????????,
 * ?????? ????????? ??????????????? ?????? ????????? ??????.
 * </pre>
 * 
 * @author P081305
 * */
setArrayDataTrim = function( targetArray ) {
	var length = targetArray.length;
	for( var idx = length - 1; idx > -1; idx-- ) {
		targetArray[ idx ] = targetArray[ idx ].replace( /(^\s*)|(\s*$)/g, "" );
		
		if( targetArray[ idx ] == "" ) {
			targetArray.splice( idx, 1 );
		}
	}
};

/**
 * <pre>
 * ????????? ?????? ???????????? ??????
 * </pre>
 * 
 * @author P081305
 * @param evt : Key Up ?????????
 * */
var setNumberOnly = function( evt ) {
	var thisValue = this.value;
	var rexStr = /[^0-9]/gi;
	
	if( rexStr.test( thisValue ) ) {
		$( this ).val( thisValue.replace( rexStr, "" ) );
	}
};

/**
 * <pre>
 * ????????? ?????? ???????????? ??????
 * </pre> 
 * 
 * @author P081305
 * @param evt : Key Up ?????????
 * */
var setEnglishOnly = function( evt ) {
	var thisValue = this.value;
	var rexStr = /[^a-z\s]/gi;
	
	if( rexStr.test( thisValue ) ) {
		$( this ).val( thisValue.replace( rexStr, "" ) );
	}
};

/**
 * jqgrid ????????? ????????? ????????? ?????????.
 * @param index
 * @param iCol
 * @param sortOrder
 * @param gridId
 */
function jqgridSortCol(index, iCol, sortOrder, gridId){
	//debugger;
	$("#"+gridId).setGridParam({ page:  $("#miv_pageNo").val()}); 
    var colModels = $("#"+gridId).getGridParam("colModel");
    var isnumber = false;
    if(colModels[iCol].formatter == "currency" || colModels[iCol].sorttype == "integer" ) isnumber = true;  
    
    var pageNo = $("#miv_pageNo").val();
    var pageSize = $("#miv_pageSize").val();
     var startNo = ((pageNo*pageSize)-pageSize)+1; 
     // ???????????? ???????????? ???????????? json sort ????????????.
     var obj = jQuery("#"+gridId).jqGrid('getRowData');
     var slen = obj.length;
 	    for(var i = slen ; i>=0 ; i--){								// ????????? ??? ????????? ?????????	
 		   jQuery("#"+gridId).jqGrid('delRowData',i);
 	    }

   obj = sortByKey(obj, index, sortOrder,isnumber);           
 	   for(var i = 0 ; i<slen ; i++){
 		  obj[i].rnum = startNo++;
 	  	  jQuery("#"+gridId).addRowData(i+1, obj[i]);
 	   }
}

//  jqgird ?????? 
var editcolor = "#d4eaeb";
var editcolorstyle = 'style="background-color:'+editcolor+';"';


//?????? ??????
function openModal(id){
	$("#"+id).modal();
}
//?????? ??????
function closeModal(id){
	$("#"+id).modal("hide");
}

function checkTextLength(_this, maxLen) {
	var thisVal = $(_this).val();
	var li_byte     = 0, li_len      = 0;
	debugger;
	if(thisVal != undefined){
		var curLen = thisVal.length;
	    for(i=0; i< curLen; i++)
	    {
	      li_byte +=utfCharByteSize(thisVal.charAt(i));

	       // ?????? ????????? li_max??? ???????????????
	       if(li_byte <= maxLen)
	       {
	          li_len = i + 1;
	       }
	       
			if(li_byte > maxLen){
				var str = $(_this).val().substring(0, li_len);
				$(_this).val(str);
				return false;
			}
	    }

	}
}

function utfCharByteSize(ch) {
    if (ch == null || ch.length == 0) {
        return 0;
      }

      var charCode = ch.charCodeAt(0);

      if (charCode <= 0x00007F) {
        return 1;
      } else if (charCode <= 0x0007FF) {
        return 2;
      } else if (charCode <= 0x00FFFF) {
        return 3;
      } else {
         return 3; 
      }
};

Number.prototype.format = function() {
	if( this == 0 ) return 0;
	
	var reg = /(^[+-]?\d+)(\d{3})/gi;
	var n = ( this + "" );
	
	while ( reg.test( n ) )
		n = n.replace( reg, "$1" + "," + "$2" );
	
	return n;
};

function openPopUp(url, name, width, height)  {
	var xPos = (document.body.clientWidth/2)- (width/2);
	xPos += window.screenLeft;
	var yPos = (screen.availHeight / 2) - (height / 2);
	var args = 'scrollbars=no,toolbar=no,location=no,left='+xPos+',top='+yPos+',width='+width+',height='+height;
	var oWin = window.open(url, name, args);
	return oWin;
}

function openPosPopUp(url, name, width, height, xPos, yPos)  {
	var args = 'scrollbars=no,toolbar=no,location=no,left='+xPos+',top='+yPos+',width='+width+',height='+height;
	var oWin = window.open(url, name, args);
	return oWin;
}

function chkPwd(str){
	 var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
	 if(!reg_pwd.test(str)){
	    return false;
	 }
	 
   return true;
}

function chkNumber(element) {
	  var val1 = element.value;
	  var num = new Number(val1);
	  
	  if(isNaN(num)){
	   
	   alert("????????? ?????? ???????????????.");
	   element.value = '';
	  }
}

//?????? ????????????  
function getCookie( name ) {  
   var nameOfCookie = name + "=";  
   var x = 0;  
   while ( x <= document.cookie.length )  
   {  
       var y = (x+nameOfCookie.length);  
       if ( document.cookie.substring( x, y ) == nameOfCookie ) {  
           if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )  
               endOfCookie = document.cookie.length;  
           return unescape( document.cookie.substring( y, endOfCookie ) );  
       }  
       x = document.cookie.indexOf( " ", x ) + 1;  
       if ( x == 0 )  
           break;  
   }  
   return "";  
}  
  
// 24?????? ?????? ?????? ????????????  
// expiredays ?????? ????????? ???????????? ?????? ??????  
function setCookie( name, value, expiredays ) {   
   var todayDate = new Date();   
   todayDate.setDate( todayDate.getDate() + expiredays );   
   document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}  

function checkPass(pw){
	 var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	 var number = "1234567890";
	 var sChar = "-_=+\|()*&^%$#@!~`?></;,.:'";

	 var sChar_Count = 0;
	 var alphaCheck = false;
	 var numberCheck = false;
	 
	 if(10 <= pw.length || pw.length <= 15){
	  for(var i=0; i<pw.length; i++){
	   if(sChar.indexOf(pw.charAt(i)) != -1){
	    sChar_Count++;
	   }
	   if(alpha.indexOf(pw.charAt(i)) != -1){
	    alphaCheck = true;
	   }
	   if(number.indexOf(pw.charAt(i)) != -1){
	    numberCheck = true;
	   }
	  }//for

	  if(sChar_Count < 1 || alphaCheck != true || numberCheck != true){
		   alert("??????????????? 10~15?????? ??????,??????,??????????????? ??????????????? ?????????.");
		   return false;
	  }//if
	  
	 }else{
		  alert("??????????????? 10~15?????? ??????,??????,??????????????? ??????????????? ?????????.");
		  return  false;
	 }//else
	 
	 return true;
}

function onOnlyAlphaNumber(obj) {
	var inText = obj;
	var deny_char = /^[A-Za-z0-9]+$/;

	if (deny_char.test(inText)) {
		return false;
	}
	return true;
}


//-------------------------------------------------- jqGrid?????? ?????? ??????

/**
*????????? ?????????????????? ???????????? ??????????????? ????????? ????????????????????? ?????????. 
*/
function bindWindowJqGridResize(gridId, divId){
    $(window).bind('resize', function() {
//    	debugger;
        // ???????????? width??? div ??? ????????? ??????
        doJqGridResize(gridId, divId); 
     }).trigger('resize');
}

/**
*????????? ?????????????????? ???????????? ??????????????? ????????? ????????????????????? ?????????. 
*/
function bindWindowJqGridResizeWidth(gridId, divId, width){
    $(window).bind('resize', function() {
    	if($('#' + divId).width() > 100)
           doJqGridResize(gridId, divId);
    	else{
    		width += 56;
    		doJqGridResize(gridId, divId, width);
    	}	
     }).trigger('resize');
}

/**
*????????? ?????????????????? ???????????? ????????? ????????? ????????????????????? ?????????. 
*/
function bindWindowJqGridResizeRate(gridId, percentage){
    $(window).bind('resize', function() {
        // ???????????? width??? div ??? ????????? ??????
        doJqGridResizeRate(gridId, percentage); 
     }).trigger('resize');
}

/**
*????????? ?????????????????? ???????????? ???????????? ????????? ????????????????????? ?????????. 
*/
function bindWindowJqGridResizeDivRate(gridId, divId, percentage){
    $(window).bind('resize', function() {
        // ???????????? width??? div ??? ????????? ??????
        doJqGridResizeDivRate(gridId, divId, percentage); 
     }).trigger('resize');
}



/**
*????????? ????????????
*/
function doJqGridResize(gridId, divId , width){
//	debugger;
	if(width){
		 $('#' + gridId).setGridWidth(width, true); 
	}else{			
		 $('#' + gridId).setGridWidth($('#' + divId).width()-2 , true); 
	}
        
}

/**
*????????? ????????????(??? ?????? ??????)
*/
function doJqGridResizeRate(gridId, percentage){
	var winWidth = $(window).width();
	var width = Math.round((winWidth / 100) * percentage);
	$('#' + gridId).setGridWidth(width, true);    
}

/**
*????????? ????????????(???????????? ??????)
*/
function doJqGridResizeDivRate(gridId, divId, percentage){
	var winWidth = $('#' + divId).innerWidth();
	var width = Math.round((winWidth / 100) * percentage);
	$('#' + gridId).setGridWidth(width, true);    
}


/**
*GET ????????? ????????? JSON String(????????????????????? ???????????? ????????????)
*/
function getJqGridInitDataJsonString(gridId){	
	return JSON.stringify($('#' + gridId).jqGrid('getGridParam', 'data'));       
}


/**
*GET ????????? ????????? JSON String 
*/
function getJqGridDataJsonString(gridId){	
	return  JSON.stringify($('#' + gridId).jqGrid('getRowData'));       
}

/**
*????????? Cell????????? ??????.
*/
function jqGridBeforeEditCell(gridId, rowIdx, colIdx) {
	jQuery("#" + gridId).jqGrid('setGridParam',{
  		selRowIdx : rowIdx,
  		selColIdx : colIdx
	});
}

/**
*????????? Cell????????? ??????.
*/
function clearJqGridCellEditor(gridId){	
	var rowIdx = $('#' + gridId).jqGrid('getGridParam', 'selRowIdx');
	var colIdx = $('#' + gridId).jqGrid('getGridParam', 'selColIdx');
	var row = jQuery('#'+gridId+' tr:eq('+rowIdx+')');
	
	if(row && row.length > 0){
		if(rowIdx || rowIdx==0){
			if(colIdx || colIdx==0){
				$('#' + gridId).saveCell(rowIdx,colIdx);
			}
		}
	}
}

/**
*????????? GET Cell???.//??????..
*/
function getJqGridCellValue(gridId, rowId, colName) {
	
    var cell = $('#' + gridId).jqGrid('getCell',rowId,colName);    
    var val = cell.val();
    return val;
}

/**
* jqGrid??????
*/
function blockJqGridOnlyGrid(gridId, message) {
	$("#lui_" + gridId).css('width',$('#gbox_' + gridId).css('width'));
	$("#lui_" + gridId).css('height',$('#gbox_' + gridId).css('height'));
	$("#lui_" + gridId).css('top',$('#' + gridId).css('top'));
	$("#lui_" + gridId).css('left',$('#' + gridId).css('left'));
	$("#lui_" + gridId).css('position','absolute');
   	$("#lui_" + gridId).show();
   	if(message){
   		$("#load_" + gridId).text(message).show();
   	}	 
}

/**
* jqGrid ?????????
*/
function unBlockJqGridOnlyGrid(gridId) {
	$("#lui_" + gridId).css('width',$('body').css('width'));
	$("#lui_" + gridId).css('height',$('body').css('height'));
	$("#lui_" + gridId).css('top',0);
	$("#lui_" + gridId).css('left',0);
	$("#lui_" + gridId).css('position','');
   	$("#lui_" + gridId).hide();
	$("#load_" + gridId).hide();   
}

/**
* ???????????? ?????? ???????????? ??????
*/
function checkAllGridCheckbox(gridId){
	$('#' + gridId + ' [type=checkbox]:not(:disabled)').prop('checked', true);
}

/**
* ???????????? ?????? ???????????? ????????????
*/
function unCheckAllGridCheckbox(gridId){
	$('#' + gridId + ' [type=checkbox]:not(:disabled)').prop('checked', false);
}

/**
 * ???????????? : ?????? ????????? ?????????
 * ??????     : nmPopupCenter(url, object,windowWidth, windowHeight, windowFeatures);
* @ parameter : sTargetPath : ?????? popup?????? ?????? ????????? ??????
                              object          : popup????????? ?????? object
                              windowWidth     : ?????? ??????
                              windowHeight    : ?????? ??????
                              windowFeatures  : ?????? ??????
 */
openWinC = function (url, windowName, sParam, windowWidth, windowHeight, windowFeatures){
	
    try {
        if( windowFeatures == null || windowFeatures == "" ) {
            windowFeatures = "toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no";
        }
        //windowFeatures="";
        //alert(windowFeatures);
        
        
        if(navigator.appVersion.indexOf("Safari") > 0 && navigator.appVersion.indexOf("Chrome") < 0 && navigator.appVersion.indexOf("Version/5.1") > 0) {
            windowHeight = parseInt(windowHeight) - 61;
        }
        
        
        if(navigator.appVersion.indexOf("Chrome") < 0) {
            windowHeight = parseInt(windowHeight) - 61;
        }

        if(navigator.appVersion.indexOf("Chrome") > 0) {
        	windowWidth = parseInt(windowWidth) + 165;
        	windowHeight = parseInt(windowHeight) + 20;
        }

        var xPos = (screen.availWidth  - windowWidth) / 2;
        var yPos = (screen.availHeight - windowHeight) / 2;
        var feature =  "top=" + yPos + ",left=" + xPos + ",width=" + windowWidth + ",height=" + windowHeight +  "," + windowFeatures;
        if(!windowName) {
        	//windowName = "_blank";
        	windowName = "LOFA_POP";
        }
        var newUrl = url;
        if(sParam) {
        	newUrl = newUrl+"?"+sParam;
        }
        var oWin = window.open( newUrl , windowName, feature );
        
 		setTimeout(function(){
 			oWin.focus();
 		}, 1000);
 		
        return oWin;
    } catch(errorObject) {
		alert("Opening a pop-up window was blocked. Please allow opening a pop-ups  for this site");
    }
};

//------------------------------------------------------------------------------------------------------------jqgrid ?????? ???

function isNull(str){
	str = $.trim(str);
	if(str == null || str == 'undefined' || str.length == 0) { return true; } return false;
}

function selectChkAll (tableObjId , selectAllChkId, chkNm) {
	if(selectAllChkId == null || selectAllChkId == ''){
		selectAllChkId = "chkAll";
	}
	
	if(chkNm == null || chkNm == ''){
		chkNm = "chk";
	}
	
	var tableChkObj = $("#"+tableObjId).find($("input[name="+chkNm+"]"));
	var chkBool 	= $($("#"+tableObjId).find($("#"+selectAllChkId))).is(":checked");
	for(var i=0;i<tableChkObj.length;i++){
		if( $(tableChkObj[i]).prop("disabled") ) continue;
		$(tableChkObj[i]).prop("checked", chkBool);
	}
}

/**
 * unique??? id ??????
 * @author	cwcoms
 * @since	2016-08-04
 */
function createUid(){
	return "UID" + (new Date()).getTime();
}
/**
 * TABLE ??? ??????
 * @param tableObjId, row
 * @returns void
 */
function tableAddRow (tableObjId, afterRow, templatTableObjId, clearYn) {

	//element??? id????????????
	var _addId = function(newrow){
		if(isNull(newrow)){
			return;
		}
		
		var uid = createUid();
		
		newrow.append('<input type="hidden" name="idx" value="'+uid+'"/>');
		
		var arr = newrow.find("input,select");
		if(isNull(arr)){
			return;
		}
		
		arr.each(function(index, value){	
			var nm = $(value).attr("name");
			
			if(!isNull(nm)){
				$(value).attr("id", nm + "_" + uid);
			}
		});
	};
	
	var addRow 	= $("#"+tableObjId).find("tbody > tr:eq(0)");
	var newrow 	= addRow.clone(); 		// tr??????
	
	if(!isNull(templatTableObjId) ) {
		newrow = $("#"+templatTableObjId).find("tr:eq(0)").clone();
	}
	
	if(afterRow != ""){
		newrow.insertAfter($("#"+tableObjId+" tbody > tr:eq("+afterRow+")"));	// id??? ??? ?????? ?????? ????????? class??? ?????? ??????
	}else{
		$("#"+tableObjId+" tbody:last").append(newrow);
	}
	
	if(clearYn == false || isNull(clearYn)){
		var tempObj = newrow.find('input,select,textarea');
		for(var i=0;i<tempObj.size();i++) {
			$(tempObj[i]).val("");
		}
	}
	
	//element??? id????????????
	_addId(newrow);
	
	return newrow;
}

/**
 * TABLE ??? ??????
 * @param tableObjId, chkNm, minRow
 * @returns void
 */
function tableDeleteRow (tableObjId, chkNm, minRow) {
	if(chkNm == null || chkNm == ''){
		chkNm = "chk";
	}
	
	var allCnt  	= $("#"+tableObjId).find($("input[name="+chkNm+"]")).size();
	var $chkObj  	= $("#"+tableObjId).find($("input[name="+chkNm+"]:checked"));
	var chkCount 	= $chkObj.size();

	if(chkCount <= 0){
		alert("????????? ???????????? ????????? ?????????.");
		$("#"+tableObjId).focus();
		return;
	}
	
	if(minRow > 0){
		if(minRow == allCnt){
			alert("["+minRow+"]??? ?????? ???????????? ????????? ????????? ?????????.");
			return;
		}
	}

	for(var i=0; i<allCnt-minRow; i++){
		if($chkObj.eq(i).is(":checked")){
			$chkObj.eq(i).closest("tr").remove();
		}
	}
}

function goTwitter(t, u) {
	var snsUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&url="+encodeURIComponent(u);
    window.open(snsUrl, 'twitter', 'width=450px, height=450px');
}

function goFacebook(u) {
    var url = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(u);
    window.open(url, 'facebook', 'width=450px, height=450px');
}

function contentsPrint(div) {
	var initBody = document.body.innerHTML;
	
	var beforePrint = function() {
		 document.body.innerHTML = document.getElementById(div).innerHTML;
	};
	
	var afterPrint = function() {
		document.body.innerHTML = initBody;
	}
	
	if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }
	
	window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
    
    window.print();
}

/*
- ?????? : ????????????, ????????????, ????????????, ????????????, ???????????? ??????(???????????? ???) ??????
- ?????? : ????????????, ??????????????????, ????????????, ???????????????, ????????? ??????
- ?????? : ????????????, ????????????(??????, VC, ??????, ??????), ????????????(IPO ???), ?????????????????? ??????
- ?????? : ????????????, ?????? ??? ??????, ?????? ??? ??????, ????????? ??????
*/
var g_cKeyword1 = [ '????????????', '????????????', '????????????', '???????????? ??????(???????????? ???) ??????' ];
var g_cKeyword2 = [ '????????????', '??????????????????', '????????????', '???????????????', '????????? ??????'];
var g_cKeyword3 = [ '????????????', '????????????(??????, VC, ??????, ??????)', '????????????(IPO ???)', '?????????????????? ??????' ];
var g_cKeyword4 = [ '????????????', '?????? ??? ??????', '?????? ??? ??????', '????????? ??????' ];

function getKeyword(dt, setVal, obj){
	
	var option = "<option value=\"\">- ?????? -</option>";
	var arr;
	
	if(dt == "01"){ 
		arr = g_cKeyword1;
	}else if(dt == "02"){ 
		arr = g_cKeyword2;
	}else if(dt == "03"){ 
		arr = g_cKeyword3;
	}else if(dt == "04"){ 
		arr = g_cKeyword4;
	}else{
		return option;
	}
	
	for ( var i = 0; i < arr.length; i++ ) {
		var selected = "";
		if(arr[i] == setVal){ 
			selected = "selected='selected'";
		}
		option += "<option value=\""+arr[i]+"\" "+selected+">"+arr[i]+"</option>";
	}
	
	$(obj).html(option);
	
	return option;
}

function commonFileDown(down_type, file_path, orignl_file_nm, file_nm){
	
	var frm = document.commonFileFrm;
	
	frm.down_type.value 		= down_type;
	frm.file_path.value 		= file_path;
	frm.orignl_file_nm.value 	= orignl_file_nm;
	frm.file_nm.value 			= file_nm;
	
	frm.method = "post";
	frm.action = "/commonfile/fileDownLoad.do";
	frm.submit();
}



$(document).ajaxStart(function() {
	// ?????? ??? ???????????? ????????? 
    $('#hideloading').show();
	//console.log("show" + "|" +this);
}).ajaxStop(function() {
    // ?????? ??? ????????? ???????????? ?????? hide ??????
    $('#hideloading').hide();
    //console.log("hide"+"|"+this);
    $('#hideloadingmessage').html("");
}
);

$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader("AJAX", true);
     },
     error: function(xhr, status, err) {
        if (xhr.status == 401) {
            alert("????????? ?????? ????????????. ????????? ???????????? ???????????????.");
            location.href = "/j_spring_security_logout";
         }else if (xhr.status == 403) {
        	 alert("????????? ???????????? ???????????? ???????????????."); 
             location.href = "/j_spring_security_logout";
         }
     } 
});
//?????????
function youtube(){
	window.open("https://www.youtube.com/seoulbiohub");
}
//????????????
/*function facebook(){
	var tm_content   = "???????????????";
	var link = document.location.href;
	window.open("http://www.facebook.com/share.php?v=4&src=bm&u="+link+"&t="+encodeURIComponent(tm_content));
}*/
//?????????
function twitter(){
	
	var title 		= "???????????????";
	var short_url 	= document.location.href;
	var tm_content  = title + " " +  short_url;
	window.open("http://twitter.com/intent/tweet?status="+encodeURIComponent(tm_content));

}

//????????????
function KakaoStoryLink(){
	var subject 	= "";
	var explains 	= "";
	var image 		= "";
	var link 		= document.location.href;

	executeKakaoStoryLink(subject,explains,image,link,link,"???????????????");
}

//????????????
function linknow(){
	var subject = "???????????????";
	var url 	= document.location.href;
	var data 	= encodeURIComponent('{"title":"'+subject+'","url":"'+url+'"}');
	window.open('http://www.linknow.kr/?go=send_wall&data='+data);
}

//?????????
function emailSend(){
	window.open('mailto:mail@example.org');
}

//URL??????
function is_ie() {
  if(navigator.userAgent.toLowerCase().indexOf("chrome") != -1) return false;
  if(navigator.userAgent.toLowerCase().indexOf("msie") != -1) return true;
  if(navigator.userAgent.toLowerCase().indexOf("windows nt") != -1) return true;
  return false;
}

function urlCopy(homepage){
	
    //var link = document.location.href;
    var pt   = document.location.protocol;
    var host = document.location.host;
    var path = document.location.pathname;
    var link = pt + "//" + host + path + g_cmm_param;
    
    
    if(link.indexOf("?") != -1){
    	link += "&link_g_topmenu_id="+g_topmenu_id+"&link_g_submenu_id="+g_submenu_id+"&link_g_homepage="+homepage;
    }else{
    	link += "?link_g_topmenu_id="+g_topmenu_id+"&link_g_submenu_id="+g_submenu_id+"&link_g_homepage="+homepage;
    }
    
    //alert(link);

    var mungu1 ="";
    var mungu2 ="";
    if(homepage=="E"){
    	mungu1 = "The URL Address of the Bio-hub copied on the clipboard\n\You can choose Ctrl+V or Paste button.";
    	mungu2 = "This is the URL address of Bio-hub. Press Ctrl+C to copy to the clipboard";
    }else{
    	mungu1 = "?????????????????? URL ????????? ??????????????? ?????????????????????.\n\Ctrl + V ?????? ?????? ????????? ???????????? ??????????????? ????????????.";
    	mungu2 = "?????????????????? URL ???????????????. Ctrl+C??? ?????? ??????????????? ???????????????";
    }
  
	if( is_ie() ) {
		if(window.clipboardData.setData('Text', link)){
			alert(mungu1);
		}
	} else {
		temp = prompt(mungu2, link);
	}
	//self.close();
}

//PRINT
function pagePrint(){
	/*var initBody;
    //??????????????? ???????????? ??????
    window.onbeforeprint = function () {

        initBody = document.body.innerHTML;                                                                //?????? ????????????
                
        document.body.innerHTML = document.getElementById('content').innerHTML;    //???????????? ?????? ??????

    };

    //????????? ????????? ???????????? ??????
    window.onafterprint = function () {
        document.body.innerHTML = initBody;        //?????? ????????????
    };

    window.print();*/
	$(".content").printThis();

}

function closePopup(){
	window.close();
}

/***
 * ???????????? ????????????(??????)
 * @param objValue 
 * @return  true / false
 * @exception 
 */
function numberCheck(obj){
	
	if(isNull(obj.value)) return; 
	
	var numChk = /^[0-9]+$/;
	var numVal = obj.value;
	if(!numChk.test(numVal)){
	    var alertMsg  = "????????? ???????????? ??? ????????????.\t\n";
			alertMsg += "???????????? : 0 ~ 9 \n";
			alertMsg += "Example : 1, 2, 300, etc";
		alert(alertMsg);
		$(obj).val("");
	}
	return;
}	

/***
 * ???????????? ???????????? ????????????(????????? ??????)
 * @param objValue 
 * @return  true / false
 * @exception 
 */
function numberCheck2(obj){
	
	if(isNull(obj.value)) return; 
	
	if(!this.isNum(obj.value)){
	    var alertMsg  = "????????? ???????????? ??? ????????????.\t\t\n\n";
    		alertMsg += "???????????? : 0 ~ 9, .\n";
    		alertMsg += "Example : 0.11, 2003, 12345.67890, etc.";
    	alert(alertMsg);
    	obj.value = "";
	}
	return;
}

var qCnt = true;
function fnQuick(id)
{
	if(qCnt)
	{
		$("#"+id).css("visibility","visible");
		qCnt = false;
	}
	else
	{
		$("#"+id).css("visibility","hidden");
		$("#"+id).css("position","absolute");
		$("#"+id).css("index","9999");
		$("#"+id).css("width","234px");
		$("#"+id).css("right","51px");
		$("#"+id).css("top","0px");
		qCnt = true;
	}
}

function fnQuick1(id)
{
	$("#"+id).css("visibility","visible");
}

function fnQuick2(id)
{
	if(qCnt%2==1 && qCnt != 0)
	{
		$("#"+id).css("visibility","hidden");
		$("#"+id).css("position","absolute");
		$("#"+id).css("index","9999");
		$("#"+id).css("width","234px");
		$("#"+id).css("right","51px");
		$("#"+id).css("top","0px");
	}
}

$(function(){
	$(document).ready(function(){
		$("input.numberCheck").on("keyup", function(){
			numberCheck(this);
		});
	});
});

function validateForm(obj){
	var alertMessage = "?????? ?????????????????????.";
	for(var i =0;i <= $(obj).find("input, select, textarea").length; i++){
		if(typeof $($(obj).find("input, select, textarea")[i]).attr("data-parsley-required") != "undefined" && $($(obj).find("input, select, textarea")[i]).attr("data-parsley-required") == "true"){
			
			var typeName = $($(obj).find("input, select, textarea")[i]).attr("type");
			var tmpObj = $($(obj).find("input, select, textarea")[i]);
			if( typeName == "radio" ||  typeName == "checkbox"){
				
				var checkCnt = 0;
				
				var tmpName = $($(obj).find("input, select, textarea")[i]).attr("name");
				
				$("[name='"+tmpName+"\']").each(function(){
					if($(this).is(":checked")){
					
						checkCnt++;
					}
				});
				
				if(checkCnt == 0){
					alert(alertMessage);
					$($(obj).find("input, select, textarea")[i]).focus();
					return false;
				}

			}else{
				if($.trim($(tmpObj).val()) == ""){
					alert(alertMessage);
					$($(obj).find("input, select, textarea")[i]).focus();
					return false;
				}
            }
		}
	}
	
	return true;
}