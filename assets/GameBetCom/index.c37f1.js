window.__require=function e(t,n,o){function i(r,a){if(!n[r]){if(!t[r]){var d=r.split("/");if(d=d[d.length-1],!t[d]){var s="function"==typeof __require&&__require;if(!a&&s)return s(d,!0);if(l)return l(d,!0);throw new Error("Cannot find module '"+r+"'")}r=d}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){return i(t[r][1][e]||e)},u,u.exports,e,t,n,o)}return n[r].exports}for(var l="function"==typeof __require&&__require,r=0;r<o.length;r++)i(o[r]);return i}({SlotTipsView:[function(e,t){"use strict";cc._RF.push(t,"781e2NyxllI4J15OreWvS8k","SlotTipsView");var n={};Object.defineProperty(n,"__esModule",{value:!0});var o=e("../../../Common/Base/BaseForm"),i=e("../../../Common/Define/ShareDefine"),l=cc._decorator,r=l.ccclass,a=l.property,d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.layerWin=[],t.bg_node=null,t.icon_turbon=null,t.icon_turboff=null,t.lbl_layertips=null,t}return __extends(t,e),t.prototype.OnCreateInit=function(){this.JS_Name="SlotTipsView",this.bg_node=this.GetWndNode("bg"),this.icon_turbon=this.GetWndNode("bg/icon_turbon"),this.icon_turboff=this.GetWndNode("bg/icon_turboff"),this.lbl_layertips=this.GetWndComponent("bg/label",cc.Label)},t.prototype.OnShow=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.data=e[0],this.initTip()},t.prototype.initTip=function(){var e=this,t="";cc.Tween.stopAllByTarget(this.bg_node),this.bg_node.opacity=255,cc.tween(this.bg_node).to(.1,{scale:1.2}).to(.1,{scale:1}).delay(1).to(.5,{opacity:0}).call(function(){e.UpdateClose()}).start(),this.data==i.SlotTipType.MinimumBet?t=app.i18n.t("UI_Game840_Minimum"):this.data==i.SlotTipType.MaximumBet?t=app.i18n.t("UI_Game840_Maximum"):this.data==i.SlotTipType.TURBO_OFF?t=app.i18n.t("UI_Game1050_TurboSpinDisabled"):this.data==i.SlotTipType.TURBO_ON&&(t=app.i18n.t("UI_Game1050_TurboSpinEnabled")),this.lbl_layertips.string=t,this.icon_turbon.active=this.data==i.SlotTipType.TURBO_ON,this.icon_turboff.active=this.data==i.SlotTipType.TURBO_OFF},t.prototype.UpdateClose=function(){this.CloseForm()},t.prototype.OnClick=function(){},__decorate([a(cc.Node)],t.prototype,"layerWin",void 0),__decorate([r],t)}(o.default);n.default=d,t.exports=n,cc._RF.pop()},{"../../../Common/Base/BaseForm":void 0,"../../../Common/Define/ShareDefine":void 0}],UIGameBetCommon:[function(e,t){"use strict";cc._RF.push(t,"d7e685DvhhOuKwnwoPOyxIR","UIGameBetCommon");var n={};Object.defineProperty(n,"__esModule",{value:!0});var o=e("../../../Common/Base/BaseForm"),i=e("../../../Common/Component/UIScrollSelect"),l=e("../../../Common/Define/ShareDefine"),r=cc._decorator,a=r.ccclass,d=r.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.layerWin=[],t.betSizeNode=null,t.betSizeDefault=0,t.betLevelNode=null,t.betLevelDefault=0,t.betLinesNode=null,t.betLinesDefault=0,t.goldNum=0,t.winNum=0,t.sureWin=null,t.betAmountNode=null,t.betAmountDefault=0,t._RoomMgr=null,t.lbl_betgoldAmount=null,t.lbl_autoAmount=null,t.autoBetAmout=null,t}return __extends(t,e),t.prototype.OnCreateInit=function(){this.JS_Name="UIGameBetCommon",this._RoomMgr=app.GameBetCommonMgr(),this.betSizeDefault=20,this.betLevelDefault=3,this.betLinesDefault=5,this.betSizeNode=this.GetWndNode("bet_options/ContentNode/bet/mask_size"),this.betLevelNode=this.GetWndNode("bet_options/ContentNode/bet/mask_level"),this.betLinesNode=this.GetWndNode("bet_options/ContentNode/bet/mask_lines"),this.betAmountNode=this.GetWndNode("bet_options/ContentNode/bet/mask_amount"),this.lbl_betgoldAmount=this.GetWndComponent("bet_options/ContentNode/win_gold/coin/label_gold",cc.Label),this.lbl_autoAmount=this.GetWndComponent("bet_auto/ContentNode/win_gold/gold/label_gold",cc.Label),this.autoBetAmout=this.GetWndNode("bet_auto/ContentNode/win_gold")},t.prototype.OnShow=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[0],o=n[0],i=n[1],r=n[2],a=n[3],d=n[4],s=n[5];this.GetWndNode("bet_options").active=!(o===l.ShowCommonType.bet_auto),this.GetWndNode("bet_auto").active=o===l.ShowCommonType.bet_auto,this.GetWndComponent("bet_auto/ContentNode/spins/toggleContainer/toggle1",cc.Toggle).check(),this.Rounds="10",o===l.ShowCommonType.bet_options&&(this.betSizeDefault=i,this.betLevelDefault=r,this.goldNum=a,this.winNum=d,this.sureWin=s,this.setBetSizeNode(),this.setBetLevelNode(),this.setBetLinesNode(),this.setBetAmountNode(),this.UpdateBetgoldAmount(),this.playShowAnim(this.GetWndNode("bet_options"))),o===l.ShowCommonType.bet_auto&&(this.goldNum=r,this.winNum=a,this.sureWin=null,this.UpdateAutoBetgoldAmount(i),this.playShowAnim(this.GetWndNode("bet_auto")))},t.prototype.playShowAnim=function(e){cc.Tween.stopAllByTarget(e);var t=e.getChildByName("ContentNode");cc.Tween.stopAllByTarget(t),t.active=!1,e.position=cc.v3(0,-this.node.height/2-e.height,0),cc.tween(e).to(.3,{position:cc.v3(0,-this.node.height/2,0)}).call(function(){t.active=!0,t.opacity=0,cc.tween(t).to(.4,{opacity:255}).start()}).start()},t.prototype.setBetSizeNode=function(){var e=this;this.betSizeIndex=0;var t=this.GetWndNode("content",this.betSizeNode);t.removeAllChildren(),this._RoomMgr.betSizeConfig.forEach(function(n,o){var i=t.children[o];i||(i=cc.instantiate(e.GetWndNode("page_size",e.betSizeNode)),t.addChild(i));var l=n;e.GetWndNode("label_num",i).getComponent(cc.Label).string=""+(app.GameConfigManager().GetCurrency+l),i.active=!0,Number(n)==e.betSizeDefault&&(e.betSizeIndex=o)}),this.betSizeNode.getComponent(i.UIScrollSelect).initChildren(this.betSizeIndex)},t.prototype.setBetLevelNode=function(){var e=this;this.betLevelIndex=0;var t=this.GetWndNode("content",this.betLevelNode);t.removeAllChildren(),this._RoomMgr.betLevelConfig.forEach(function(n,o){var i=t.children[o];i||(i=cc.instantiate(e.GetWndNode("page_level",e.betLevelNode)),t.addChild(i));var l=n;e.GetWndNode("label_num",i).getComponent(cc.Label).string=""+l,i.active=!0,Number(n)==e.betLevelDefault&&(e.betLevelIndex=o)}),this.betLevelNode.getComponent(i.UIScrollSelect).initChildren(this.betLevelIndex)},t.prototype.setBetLinesNode=function(){var e=this;this.betLinesIndex=0;var t=this.GetWndNode("content",this.betLinesNode);t.removeAllChildren(),this._RoomMgr.betLinesConfig.forEach(function(n,o){var i=t.children[o];i||(i=cc.instantiate(e.GetWndNode("page_lines",e.betLinesNode)),t.addChild(i));var l=n;e.GetWndNode("label_num",i).getComponent(cc.Label).string=""+l,i.active=!0,Number(n)==e.betLinesDefault&&(e.betLinesIndex=o)}),this.betLinesNode.getComponent(i.UIScrollSelect).initChildren(this.betLinesIndex)},t.prototype.setBetAmountNode=function(){var e=this;this.betAmountIndex=0;var t=this.GetWndNode("content",this.betAmountNode);t.removeAllChildren(),this._RoomMgr.betAmountConfig.forEach(function(n,o){var i=t.children[o];i||(i=cc.instantiate(e.GetWndNode("page_amount",e.betAmountNode)),t.addChild(i));var l=e.GetWndNode("label_num",i);i.active=!0;var r=n;l.getComponent(cc.Label).string=""+(app.GameConfigManager().GetCurrency+r);var a=e._RoomMgr.betSizeConfig[e.betSizeIndex],d=e._RoomMgr.betLevelConfig[e.betLevelIndex],s=e._RoomMgr.betLinesConfig[e.betLinesIndex],u=Big(Big(a).times(d).toNumber()).times(s).toNumber();Number(n)==u&&(e.betAmountIndex=o)}),this.betAmountNode.getComponent(i.UIScrollSelect).initChildren(this.betAmountIndex)},t.prototype.OtherUpdateAmount=function(){var e=this;this._RoomMgr.betAmountConfig.forEach(function(t,n){var o=e._RoomMgr.betSizeConfig[e.betSizeIndex],l=e._RoomMgr.betLevelConfig[e.betLevelIndex],r=e._RoomMgr.betLinesConfig[e.betLinesIndex],a=Big(Big(o).times(l).toNumber()).times(r).toNumber();Number(t)==a&&(e.betAmountIndex=n,e.betAmountNode.getComponent(i.UIScrollSelect).initChildren(e.betAmountIndex),e.UpdateBetgoldAmount())})},t.prototype.AmountUpdateOtherIndex=function(){var e=this._RoomMgr.betAmountConfig[this.betAmountIndex],t=this._RoomMgr.IndexJson[e];t&&(this.betSizeNode.getComponent(i.UIScrollSelect).initChildren(t.sizeIndex),this.betSizeIndex=t.sizeIndex,this.betLevelNode.getComponent(i.UIScrollSelect).initChildren(t.LevelIndex),this.betLevelIndex=t.LevelIndex,this.betLinesNode.getComponent(i.UIScrollSelect).initChildren(t.LinesIndex),this.betLinesIndex=t.LinesIndex),this.UpdateBetgoldAmount()},t.prototype.UpdateBetgoldAmount=function(){var e=this._RoomMgr.betAmountConfig[this.betAmountIndex];1==this.sureWin?this.lbl_betgoldAmount.string=app.GameConfigManager().GetCurrency+4*this.addIntegerOfTypeBigSeparator(e,2,3,""):this.lbl_betgoldAmount.string=app.GameConfigManager().GetCurrency+this.addIntegerOfTypeBigSeparator(e,2,3,"");var t=null!=this.goldNum&&null!=this.goldNum;t&&(this.GetWndComponent("bet_options/ContentNode/win_gold/gold/label_gold",cc.Label).string=app.GameConfigManager().GetCurrency+this.addIntegerOfTypeBigSeparator(this.goldNum,2,3,",")),this.GetWndNode("bet_options/ContentNode/win_gold/gold/label_gold").parent.active=t;var n=null!=this.winNum&&null!=this.winNum;n&&(this.GetWndComponent("bet_options/ContentNode/win_gold/win/label_win",cc.Label).string=app.GameConfigManager().GetCurrency+this.addIntegerOfTypeBigSeparator(this.winNum,2,3,",")),this.GetWndNode("bet_options/ContentNode/win_gold/win/label_win").parent.active=n},t.prototype.addIntegerOfTypeBigSeparator=function(e,t,n,o){var i,l,r=e.toString(),a=r.indexOf("."),d=-1==a?r.length:a;if(n<d){var s=d%n;0==s&&(s=n),i=r.substring(0,s);for(var u=s;u<d;u+=n)i+=o+r.substring(u,u+n)}else i=r.substring(0,d);if(0==t)return i;if(i+=".",-1==a)l=t;else{u=a+1;for(var h=Math.min(r.length,u+t);u<h;u++)i+=r[u];l=(l=r.length-1-a)<t?t-l:0}return i+"0".repeat(l)},t.prototype.UpdateAutoBetgoldAmount=function(e){var t=null!=this.goldNum&&null!=this.goldNum;t&&(this.GetWndComponent("bet_auto/ContentNode/win_gold/gold/label_gold",cc.Label).string=app.GameConfigManager().GetCurrency+this.addIntegerOfTypeBigSeparator(this.goldNum,2,3,",")),this.GetWndNode("bet_auto/ContentNode/win_gold/gold/label_gold").parent.active=t;var n=null!=this.winNum&&null!=this.winNum;n&&(this.GetWndComponent("bet_auto/ContentNode/win_gold/win/label_win",cc.Label).string=app.GameConfigManager().GetCurrency+this.addIntegerOfTypeBigSeparator(this.winNum,2,3,",")),this.GetWndNode("bet_auto/ContentNode/win_gold/win/label_win").parent.active=n;var o=null!=e&&null!=e;o&&(this.GetWndComponent("bet_auto/ContentNode/win_gold/coin/label_gold",cc.Label).string=app.GameConfigManager().GetCurrency+this.addIntegerOfTypeBigSeparator(e,2,3,"")),this.GetWndNode("bet_auto/ContentNode/win_gold/coin/label_gold").parent.active=o},t.prototype.BetSizeLogEvents=function(e){e.type==l.ScrollEventType.SCROLL_END&&(this.betSizeIndex=e.index,this.OtherUpdateAmount())},t.prototype.BetLevelLogEvents=function(e){e.type==l.ScrollEventType.SCROLL_END&&(this.betLevelIndex=e.index,this.OtherUpdateAmount())},t.prototype.BetLinesLogEvents=function(e){e.type==l.ScrollEventType.SCROLL_END&&(this.betLinesIndex=e.index,this.OtherUpdateAmount())},t.prototype.BetAmouintLogEvents=function(e){e.type==l.ScrollEventType.SCROLL_END&&(this.betAmountIndex=e.index,this.AmountUpdateOtherIndex(),this.Log("LogEvents betIndx==> "+this.betAmountIndex))},t.prototype.OnClick=function(e,t,n){if("btn_confirm"==e)return app.Client.OnEvent(l.GameCommonEventType.GetRound,this.Rounds),void this.CloseForm();if(/toggle\d+/.test(e))this.Rounds=n;else{if("btn_Betconfirm"==e){var o={amount:this._RoomMgr.betAmountConfig[this.betAmountIndex],level:this._RoomMgr.betLevelConfig[this.betLevelIndex],basebetnum:this._RoomMgr.betSizeConfig[this.betSizeIndex]};return app.Client.OnEvent(l.GameCommonEventType.GetAmount,o),void this.CloseForm()}"btn_max"==e&&(this.betAmountIndex=0,this.betAmountNode.getComponent(i.UIScrollSelect).initChildren(this.betAmountIndex),this.AmountUpdateOtherIndex())}},__decorate([d(cc.Node)],t.prototype,"layerWin",void 0),__decorate([a],t)}(o.default);n.default=s,t.exports=n,cc._RF.pop()},{"../../../Common/Base/BaseForm":void 0,"../../../Common/Component/UIScrollSelect":void 0,"../../../Common/Define/ShareDefine":void 0}]},{},["SlotTipsView","UIGameBetCommon"]);