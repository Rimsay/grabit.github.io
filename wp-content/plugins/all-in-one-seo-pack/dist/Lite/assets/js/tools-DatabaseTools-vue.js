(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["tools-DatabaseTools-vue"],{2853:function(s,e,t){"use strict";t("5c24")},"5c24":function(s,e,t){},e6b1:function(s,e,t){"use strict";t.r(e);var o=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"aioseo-tools-database-tools"},[t("core-card",{attrs:{slug:"databaseTools","header-text":s.strings.resetRestoreSettings}},[t("core-settings-row",{attrs:{name:s.strings.selectSettings},scopedSlots:s._u([{key:"content",fn:function(){return[s.showSuccess?t("core-alert",{staticClass:"reset-success",attrs:{type:"green"}},[s._v(" "+s._s(s.strings.resetSuccess)+" ")]):s._e(),t("div",{staticClass:"reset-settings"},[s._v(" "+s._s(s.strings.selectSettingsToReset)+" "),t("br"),t("br"),t("grid-row",{staticClass:"settings"},[t("grid-column",[t("base-checkbox",{attrs:{size:"medium"},model:{value:s.options.all,callback:function(e){s.$set(s.options,"all",e)},expression:"options.all"}},[s._v(" "+s._s(s.strings.allSettings)+" ")])],1),s._l(s.settings,(function(e,o){return t("grid-column",{key:o,attrs:{xl:"3",md:"4",sm:"6"}},[s.options.all?s._e():t("base-checkbox",{attrs:{size:"medium"},model:{value:s.options[e.value],callback:function(t){s.$set(s.options,e.value,t)},expression:"options[setting.value]"}},[s._v(" "+s._s(e.label)+" ")]),"all"!==e.value&&s.options.all?t("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[s._v(" "+s._s(e.label)+" ")]):s._e()],1)}))],2),t("base-button",{attrs:{type:"gray",size:"medium",disabled:s.canReset},on:{click:function(e){s.showModal=!0}}},[s._v(" "+s._s(s.strings.resetSelectedSettings)+" ")])],1)]},proxy:!0}])})],1),s.showLogs?t("core-card",{attrs:{slug:"databaseToolsLogs","header-text":s.strings.logs},scopedSlots:s._u([{key:"tooltip",fn:function(){return[s._v(" "+s._s(s.strings.logsTooltip)+" ")]},proxy:!0}],null,!1,3934548655)},[s.$aioseo.data.logSizes.logs404?t("core-settings-row",{attrs:{name:s.strings.logs404,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[t("base-button",{staticClass:"clear-log",attrs:{type:"gray",size:"medium",loading:"logs404"===s.loadingLog,disabled:s.disabledLog("logs404")},on:{click:function(e){return s.processClearLog("logs404")}}},[s.disabledLog("logs404")?t("span",[t("svg-checkmark"),s._v(" "+s._s(s.strings.cleared)+" ")],1):s._e(),s.disabledLog("logs404")?s._e():t("span",[s._v(" "+s._s(s.strings.clear404Logs)+" ")])]),t("div",{staticClass:"log-size"},[t("span",{staticClass:"size-dot",class:s.getSizeClass(s.$aioseo.data.logSizes.logs404.original)}),s._v(" "+s._s(s.$aioseo.data.logSizes.logs404.readable)+" ")])]},proxy:!0}],null,!1,1716809233)}):s._e(),s.$aioseo.data.logSizes.redirectLogs?t("core-settings-row",{attrs:{name:s.strings.redirectLogs,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[t("base-button",{staticClass:"clear-log",attrs:{type:"gray",size:"medium",loading:"redirectLogs"===s.loadingLog,disabled:s.disabledLog("redirectLogs")},on:{click:function(e){return s.processClearLog("redirectLogs")}}},[s.disabledLog("redirectLogs")?t("span",[t("svg-checkmark"),s._v(" "+s._s(s.strings.cleared)+" ")],1):s._e(),s.disabledLog("redirectLogs")?s._e():t("span",[s._v(" "+s._s(s.strings.clearRedirectLogs)+" ")])]),t("div",{staticClass:"log-size"},[t("span",{staticClass:"size-dot",class:s.getSizeClass(s.$aioseo.data.logSizes.redirectLogs.original)}),s._v(" "+s._s(s.$aioseo.data.logSizes.redirectLogs.readable)+" ")])]},proxy:!0}],null,!1,4167017073)}):s._e(),s.showBadBotBlockerLogs?t("core-settings-row",{attrs:{name:s.strings.badBotBlockerLogs,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[t("base-button",{staticClass:"clear-log",attrs:{type:"gray",size:"medium",loading:"badBotBlockerLog"===s.loadingLog,disabled:s.disabledLog("badBotBlockerLog")},on:{click:function(e){return s.processClearLog("badBotBlockerLog")}}},[s.disabledLog("badBotBlockerLog")?t("span",[t("svg-checkmark"),s._v(" "+s._s(s.strings.cleared)+" ")],1):s._e(),s.disabledLog("badBotBlockerLog")?s._e():t("span",[s._v(" "+s._s(s.strings.clearBadBotBlockerLogs)+" ")])]),t("div",{staticClass:"log-size"},[t("span",{staticClass:"size-dot",class:s.getSizeClass(s.$aioseo.data.logSizes.badBotBlockerLog.original)}),s._v(" "+s._s(s.$aioseo.data.logSizes.badBotBlockerLog.readable)+" ")])]},proxy:!0}],null,!1,649968002)}):s._e()],1):s._e(),s.showModal?t("core-modal",{attrs:{"no-header":""},scopedSlots:s._u([{key:"body",fn:function(){return[t("div",{staticClass:"aioseo-modal-body"},[t("button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),s.showModal=!1}}},[t("svg-close",{on:{click:function(e){s.showModal=!1}}})],1),t("h3",[s._v(s._s(s.strings.areYouSureReset))]),t("div",{staticClass:"reset-description",domProps:{innerHTML:s._s(s.strings.actionCannotBeUndone)}}),t("base-button",{attrs:{type:"blue",size:"medium",loading:s.loading},on:{click:s.processResetSettings}},[s._v(" "+s._s(s.strings.yesIHaveBackup)+" ")]),t("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(e){s.showModal=!1}}},[s._v(" "+s._s(s.strings.noBackup)+" ")])],1)]},proxy:!0}],null,!1,2298756748)}):s._e()],1)},i=[],a=t("5530"),n=(t("caad"),t("2532"),t("4de4"),t("7db0"),t("159b"),t("b64b"),t("2f62")),l={data:function(){return{clearedLogs:{badBotBlockerLogs:!1,redirectLogs:!1,logs404:!1},showModal:!1,loading:!1,loadingLog:null,showSuccess:!1,options:{},strings:{resetRestoreSettings:this.$t.__("Reset / Restore Settings",this.$td),selectSettings:this.$t.__("Select Settings",this.$td),selectSettingsToReset:this.$t.__("Select settings that you would like to reset:",this.$td),resetSelectedSettings:this.$t.__("Reset Selected Settings to Default",this.$td),resetSuccess:this.$t.__("Your settings have been reset successfully!",this.$td),areYouSureReset:this.$t.__("Are you sure you want to reset the selected settings to default?",this.$td),actionCannotBeUndone:this.$t.sprintf(this.$t.__("This action cannot be undone. Before taking this action, we recommend that you make a %1$sfull website backup first%2$s.",this.$td),"<strong>","</strong>"),yesIHaveBackup:this.$t.__("Yes, I have a backup and want to reset the settings",this.$td),noBackup:this.$t.__("No, I need to make a backup",this.$td),logs:this.$t.__("Logs",this.$td),badBotBlockerLogs:this.$t.__("Bad Bot Blocker Logs",this.$td),cleared:this.$t.__("Cleared",this.$td),clearBadBotBlockerLogs:this.$t.__("Clear Bad Bot Blocker Logs",this.$td),logs404:this.$t.__("404 Logs",this.$td),clear404Logs:this.$t.__("Clear 404 Logs",this.$td),redirectLogs:this.$t.__("Redirect Logs",this.$td),clearRedirectLogs:this.$t.__("Clear Redirect Logs",this.$td),allSettings:this.$t.sprintf(this.$t.__("All %1$s Settings",this.$td),"AIOSEO"),logsTooltip:this.$t.__('Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don\'t clear.',this.$td)}}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(n["c"])(["isUnlicensed"])),Object(n["e"])(["addons"])),{},{settings:function(){var s=this,e=[{value:"webmaster-tools",label:this.$t.__("Webmaster Tools",this.$td),access:"aioseo_general_settings"},{value:"rss-content",label:this.$t.__("RSS Content",this.$td),access:"aioseo_general_settings"},{value:"advanced",label:this.$t.__("Advanced",this.$td),access:"aioseo_general_settings"},{value:"search-appearance",label:this.$t.__("Search Appearance",this.$td),access:"aioseo_search_appearance_settings"},{value:"social",label:this.$t.__("Social Networks",this.$td),access:"aioseo_social_networks_settings"},{value:"sitemap",label:this.$t.__("Sitemaps",this.$td),access:"aioseo_sitemap_settings"},{value:"robots",label:this.$t.__("Robots.txt",this.$td),access:"aioseo_tools_settings"},{value:"breadcrumbs",label:this.$t.__("Breadcrumbs",this.$td),access:"aioseo_general_settings"}];return window.aioseo.internalOptions.internal.deprecatedOptions.includes("badBotBlocker")&&e.push({value:"blocker",label:this.$t.__("Bad Bot Blocker",this.$td),access:"aioseo_tools_settings"}),this.$isPro&&e.push({value:"access-control",label:this.$t.__("Access Control",this.$td),access:"aioseo_admin"}),!this.isUnlicensed&&this.showImageSeoReset&&e.push({value:"image",label:this.$t.__("Image SEO",this.$td),access:"aioseo_search_appearance_settings"}),!this.isUnlicensed&&this.showLocalBusinessReset&&e.push({value:"local-business",label:this.$t.__("Local Business SEO",this.$td),access:"aioseo_local_seo_settings"}),!this.isUnlicensed&&this.showRedirectsReset&&e.push({value:"redirects",label:this.$t.__("Redirects",this.$td),access:"aioseo_redirects_settings"}),e.filter((function(e){return s.$allowed(e.access)}))},showImageSeoReset:function(){var s=this.addons.find((function(s){return"aioseo-image-seo"===s.sku}));return s&&s.isActive&&!s.requiresUpgrade},showLocalBusinessReset:function(){var s=this.addons.find((function(s){return"aioseo-local-business"===s.sku}));return s&&s.isActive&&!s.requiresUpgrade},showRedirectsReset:function(){var s=this.addons.find((function(s){return"aioseo-redirects"===s.sku}));return s&&s.isActive&&!s.requiresUpgrade},canReset:function(){var s=this,e=[];return Object.keys(this.options).forEach((function(t){e.push(s.options[t])})),!e.some((function(s){return s}))},showLogs:function(){return this.showBadBotBlockerLogs||this.$aioseo.data.logSizes.redirectLogs||this.$aioseo.data.logSizes.logs404},showBadBotBlockerLogs:function(){return window.aioseo.internalOptions.internal.deprecatedOptions.includes("badBotBlocker")}}),methods:Object(a["a"])(Object(a["a"])({},Object(n["b"])(["resetSettings","clearLog"])),{},{processResetSettings:function(){var s=this,e=[];this.options.all?this.settings.filter((function(s){return"all"!==s.value})).forEach((function(s){e.push(s.value)})):Object.keys(this.options).forEach((function(t){s.options[t]&&e.push(t)})),this.loading=!0,this.resetSettings(e).then((function(){s.showModal=!1,s.loading=!1,s.showSuccess=!0,s.options={},setTimeout((function(){s.showSuccess=!1}),5e3)}))},getSizeClass:function(s){var e="green";return 262144e3<s?e="orange":1073741274<s&&(e="red"),e},processClearLog:function(s){var e=this;this.loadingLog=s,this.clearLog(s).then((function(){e.loadingLog=null,e.clearedLogs[s]=!0}))},disabledLog:function(s){return!this.$aioseo.data.logSizes[s].original||this.clearedLogs[s]}})},r=l,c=(t("2853"),t("2877")),d=Object(c["a"])(r,o,i,!1,null,null,null);e["default"]=d.exports}}]);