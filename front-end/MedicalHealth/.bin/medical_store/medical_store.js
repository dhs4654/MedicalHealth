(function() {
	var MedicalStore = /*@__PURE__*/ (function(Component) {
		function MedicalStore(props) {
			Component.call(this, props);
			this.data = {
				isshowCost: true, //默认显示支出
				isshowIncome: false, //隐藏收入
				name: "字",
				img1: "../../static/restaurant.png",
				img2: "../../static/dressup.png",
				img3: "../../static/transport.png",
				img4: "../../static/entertainment.png",
				img5: "../../static/love.png",
				img6: "../../static/other.png",
				img7: "../../static/work.png",
				img8: "../../static/redpack.png",
				img9: "../../static/scholarship.png",
				img10: "../../static/help.png",
				type: [
					"所有",
					"食品酒水",
					"服装美饰",
					"行车交通",
					"休闲娱乐",
					"恋爱基金",
					"其他"
				],
				incometype: ["所有", "生活费", "兼职", "红包", "奖学金", "助学贷款"],
				typenow: "所有",
				typenow1: 0,
				incometypenow: "所有",
				incometypenow1: 0,
				dataList: [],
				incomeList: [],
				dayprice: "请选择日期",
				dayincome: "请选择日期",
				date: "2022-10-24",
				date1: ""
			};
		}

		if (Component) MedicalStore.__proto__ = Component;
		MedicalStore.prototype = Object.create(Component && Component.prototype);
		MedicalStore.prototype.constructor = MedicalStore;
		MedicalStore.prototype.onLoad = function() {
			//获取当前时间
			var DATE = util.formDate(new Date());
			this.data.date = DATE;

			this.DataDisplay();
		};
		MedicalStore.prototype.isCost = function() {
			this.data.isshowCost = true;
			this.data.isshowIncome = false;
		};
		MedicalStore.prototype.isIncome = function() {
			this.data.isshowCost = false;
			this.data.isshowIncome = true;
		};
		MedicalStore.prototype.DataDisplay = function() {
			this.data.dataList = [];
			this.data.incomeList = [];

			var num = this.Number;
			/*await db.collection('data').count().then(res => {
	    	num = res.result.total
	    	this.Number = num;
	    		const batchTimes = Math.ceil(this.Number / 20) //计算需要获取几次
	    	let arraypro1 = [] // 空数组存储每一次获取到的支出记录 
	    	let arraypro2 = [] // 空数组存储每一次获取到的收入记录 
	    	let x = 0 //每次循环+1 当x等于batchTimes 说明已经到了最后一次获取数据的时候
	    	for (let i = 0; i < batchTimes; i++) {
	    		db.collection('data').where({
	    			date: that.date,
	    		}).skip(i * 20).get().then(res => {
	    			x += 1
	    			for (let j = 0; j < res.result.data.length; j++) {
	    				if (res.result.data[j].datatype == '0') {
	    					arraypro1.push(res.result.data[j])
	    				} else {
	    					arraypro2.push(res.result.data[j])
	    				}
	    			}
	    			if (x == batchTimes) {
	    				that.dataList = arraypro1
	    				that.incomeList = arraypro2
	    			}
	    			var price = 0
	    			var income = 0
	    			for (var i in this.dataList) {
	    				price = price + parseFloat(this.dataList[i].cost)
	    			}
	    			for (var i in this.incomeList) {
	    				income = income + parseFloat(this.incomeList[i].cost)
	    			}
	    			that.dayprice = price;
	    			that.dayincome = income;
	    		})
	    	}
	    })*/
		};
		MedicalStore.prototype.bindDateChange = function(e) {
			this.data.dataList = [];
			this.data.incomeList = [];

			console.log("picker发送选择改变，携带值为", e.detail.value);

			var num = this.Number;
			/*await db.collection('data').count().then(res => {
	    	num = res.result.total
	    	this.Number = num;
	    	this.date = e.detail.value;
	    	console.log(this.date)
	    		const batchTimes = Math.ceil(this.Number / 20) //计算需要获取几次
	    	let arraypro1 = [] // 空数组存储每一次获取到的支出记录 
	    	let arraypro2 = [] // 空数组存储每一次获取到的收入记录 
	    	let x = 0 //每次循环+1 当x等于batchTimes 说明已经到了最后一次获取数据的时候
	    	for (let i = 0; i < batchTimes; i++) {
	    		db.collection('data').where({
	    			date: e.detail.value,
	    		}).skip(i * 20).get().then(res => {
	    			x += 1
	    			console.log(res)
	    			for (let j = 0; j < res.result.data.length; j++) {
	    				if (res.result.data[j].datatype == '0') {
	    					arraypro1.push(res.result.data[j])
	    				} else {
	    					arraypro2.push(res.result.data[j])
	    				}
	    			}
	    			if (x == batchTimes) {
	    				that.dataList = arraypro1
	    				that.incomeList = arraypro2
	    			}
	    			var price = 0
	    			var income = 0
	    			for (var i in this.dataList) {
	    				price = price + parseFloat(this.dataList[i].cost)
	    			}
	    			for (var i in this.incomeList) {
	    				income = income + parseFloat(this.incomeList[i].cost)
	    			}
	    			that.dayprice = price;
	    			that.dayincome = income;
	    		})
	    	}
	    })*/
		};
		MedicalStore.prototype.bindTypeChange = function(e) {
			this.data.dataList = [];

			console.log("picker发送选择改变，携带值为", e.detail.value);

			var num = this.Number;
			/*await db.collection('data').count().then(res => {
	    	num = res.result.total
	    	this.Number = num;
	    	this.typenow1 = e.detail.value;
	    	if (this.typenow1 == '1') {
	    		this.typenow = '食品酒水'
	    	} else if (this.typenow1 == '2') {
	    		this.typenow = '服饰美妆'
	    	} else if (this.typenow1 == '3') {
	    		this.typenow = '行车交通'
	    	} else if (this.typenow1 == '4') {
	    		this.typenow = '休闲娱乐'
	    	} else if (this.typenow1 == '5') {
	    		this.typenow = '恋爱基金'
	    	} else if (this.typenow1 == '6') {
	    		this.typenow = '其他'
	    	}
	    	console.log(this.typenow)
	    		const batchTimes = Math.ceil(this.Number / 20) //计算需要获取几次
	    	let arraypro = [] // 空数组存储每一次获取到的支出记录
	    	let x = 0 //每次循环+1 当x等于batchTimes 说明已经到了最后一次获取数据的时候
	    	for (let i = 0; i < batchTimes; i++) {
	    		if (this.typenow1 == '0') {
	    			db.collection('data').where('type>=1 && type<=23 && datatype==0')
	    				.skip(i * 20).get().then(res => {
	    					x += 1
	    					console.log(res)
	    					for (let j = 0; j < res.result.data.length; j++) {
	    						if (res.result.data[j].date == this.date) {
	    							arraypro.push(res.result.data[j])
	    						}
	    					}
	    					if (x == batchTimes) {
	    						that.dataList = arraypro
	    					}
	    					var price = 0
	    					for (var i in this.dataList) {
	    						price = price + parseFloat(this.dataList[i].cost)
	    					}
	    					that.dayprice = price;
	    				})
	    		} else if (this.typenow1 == '1') {
	    			db.collection('data').where('type>=1 && type<=4 && datatype==0').skip(i * 20)
	    				.get().then(res => {
	    					x += 1
	    					console.log(res)
	    					for (let j = 0; j < res.result.data.length; j++) {
	    						if (res.result.data[j].date == this.date) {
	    							arraypro.push(res.result.data[j])
	    						}
	    					}
	    					if (x == batchTimes) {
	    						that.dataList = arraypro
	    						console.log(that.dataList)
	    					}
	    					var price = 0
	    					for (var i in this.dataList) {
	    						price = price + parseFloat(this.dataList[i]
	    							.cost)
	    					}
	    					that.dayprice = price;
	    				})
	    		} else if (this.typenow1 == '2') {
	    			db.collection('data').where('type>=5 && type<=8&& datatype==0').skip(
	    				i * 20).get().then(res => {
	    				x += 1
	    				console.log(res)
	    				for (let j = 0; j < res.result.data.length; j++) {
	    					if (res.result.data[j].date == this.date) {
	    						arraypro.push(res.result.data[j])
	    					}
	    				}
	    				if (x == batchTimes) {
	    					that.dataList = arraypro
	    					console.log(that.dataList)
	    				}
	    				var price = 0
	    				for (var i in this.dataList) {
	    					price = price + parseFloat(this.dataList[i]
	    						.cost)
	    				}
	    				that.dayprice = price;
	    				console.log(price)
	    			})
	    		} else if (this.typenow1 == '3') {
	    			db.collection('data').where('type>=9 && type<=14 && datatype==0')
	    				.skip(
	    					i * 20).get().then(res => {
	    					x += 1
	    					console.log(res)
	    					for (let j = 0; j < res.result.data.length; j++) {
	    						if (res.result.data[j].date == this.date) {
	    							arraypro.push(res.result.data[j])
	    						}
	    					}
	    					if (x == batchTimes) {
	    						that.dataList = arraypro
	    						console.log(that.dataList)
	    					}
	    					var price = 0
	    					for (var i in this.dataList) {
	    						price = price + parseFloat(this.dataList[i]
	    							.cost)
	    					}
	    					that.dayprice = price;
	    					console.log(price)
	    				})
	    		} else if (this.typenow1 == '4') {
	    			db.collection('data').where('type>=15 && type<=18&& datatype==0').skip(
	    				i * 20).get().then(res => {
	    				x += 1
	    				console.log(res)
	    				for (let j = 0; j < res.result.data.length; j++) {
	    					if (res.result.data[j].date == this.date) {
	    						arraypro.push(res.result.data[j])
	    					}
	    				}
	    				if (x == batchTimes) {
	    					that.dataList = arraypro
	    					console.log(that.dataList)
	    				}
	    				var price = 0
	    				for (var i in this.dataList) {
	    					price = price + parseFloat(this.dataList[i]
	    						.cost)
	    				}
	    				that.dayprice = price;
	    				console.log(price)
	    			})
	    		} else if (this.typenow1 == '5') {
	    			db.collection('data').where('type>=19 && type<=22&& datatype==0').skip(
	    				i * 20).get().then(res => {
	    				x += 1
	    				console.log(res)
	    				for (let j = 0; j < res.result.data.length; j++) {
	    					if (res.result.data[j].date == this.date) {
	    						arraypro.push(res.result.data[j])
	    					}
	    				}
	    				if (x == batchTimes) {
	    					that.dataList = arraypro
	    					console.log(that.dataList)
	    				}
	    				var price = 0
	    				for (var i in this.dataList) {
	    					price = price + parseFloat(this.dataList[i]
	    						.cost)
	    				}
	    				that.dayprice = price;
	    				console.log(price)
	    			})
	    		} else if (this.typenow1 == '6') {
	    			db.collection('data').where('type==23&& datatype==0').skip(i * 20)
	    				.get().then(res => {
	    					x += 1
	    					console.log(res)
	    					for (let j = 0; j < res.result.data.length; j++) {
	    						if (res.result.data[j].date == this.date) {
	    							arraypro.push(res.result.data[j])
	    						}
	    					}
	    					if (x == batchTimes) {
	    						that.dataList = arraypro
	    						console.log(that.dataList)
	    					}
	    					var price = 0
	    					for (var i in this.dataList) {
	    						price = price + parseFloat(this.dataList[i]
	    							.cost)
	    					}
	    					that.dayprice = price;
	    					console.log(price)
	    				})
	    		}
	    	}
	    })*/
		};
		MedicalStore.prototype.bindIncomeTypeChange = function(e) {
			this.data.incomeList = [];

			console.log("picker发送选择改变，携带值为", e.detail.value);

			var num = this.Number;
			/*await db.collection('data').count().then(res => {
	    	num = res.result.total
	    	this.Number = num;
	    	this.typenow2 = e.detail.value;
	    	if (this.typenow2 == '1') {
	    		this.incometypenow = '生活费'
	    	} else if (this.typenow2 == '2') {
	    		this.incometypenow = '兼职'
	    	} else if (this.typenow2 == '3') {
	    		this.incometypenow = '红包'
	    	} else if (this.typenow2 == '4') {
	    		this.incometypenow = '奖学金'
	    	} else if (this.typenow2 == '5') {
	    		this.incometypenow = '助学贷款'
	    	}
	    	console.log(this.incometypenow)
	    		const batchTimes = Math.ceil(this.Number / 20) //计算需要获取几次
	    	let arraypro = [] // 空数组存储每一次获取到的记录 
	    	let x = 0 //每次循环+1 当x等于batchTimes 说明已经到了最后一次获取数据的时候
	    	for (let i = 0; i < batchTimes; i++) {
	    		if (this.typenow2 == '0') {
	    			db.collection('data').where('type>=1 && type<=5&& datatype==1')
	    				.skip(i * 20).get().then(res => {
	    					x += 1
	    					console.log(res)
	    					for (let j = 0; j < res.result.data.length; j++) {
	    						if (res.result.data[j].date == this.date) {
	    							arraypro.push(res.result.data[j])
	    						}
	    					}
	    					if (x == batchTimes) {
	    						that.incomeList = arraypro
	    						console.log(that.incomeList)
	    					}
	    					var price = 0
	    					for (var i in this.incomeList) {
	    						price = price + parseFloat(this.incomeList[i].cost)
	    					}
	    					that.dayincome = price;
	    					console.log(price)
	    				})
	    		} else if (this.typenow2 == '1') {
	    			db.collection('data').where('type==1&& datatype==1').skip(i * 20)
	    				.get().then(res => {
	    					x += 1
	    					console.log(res)
	    					for (let j = 0; j < res.result.data.length; j++) {
	    						if (res.result.data[j].date == this.date) {
	    							arraypro.push(res.result.data[j])
	    						}
	    					}
	    					if (x == batchTimes) {
	    						that.incomeList = arraypro
	    						console.log(that.incomeList)
	    					}
	    					var price = 0
	    					for (var i in this.incomeList) {
	    						price = price + parseFloat(this.incomeList[i]
	    							.cost)
	    					}
	    					that.dayincome = price;
	    					console.log(price)
	    				})
	    		} else if (this.typenow2 == '2') {
	    			db.collection('data').where('type==2&& datatype==1').skip(
	    				i * 20).get().then(res => {
	    				x += 1
	    				console.log(res)
	    				for (let j = 0; j < res.result.data.length; j++) {
	    					if (res.result.data[j].date == this.date) {
	    						arraypro.push(res.result.data[j])
	    					}
	    				}
	    				if (x == batchTimes) {
	    					that.incomeList = arraypro
	    					console.log(that.incomeList)
	    				}
	    				var price = 0
	    				console.log(this.incomeList)
	    				for (var i in this.incomeList) {
	    					price = price + parseFloat(this.incomeList[i]
	    						.cost)
	    				}
	    				that.dayincome = price;
	    				console.log(price)
	    			})
	    		} else if (this.typenow2 == '3') {
	    			db.collection('data').where('type==3&& datatype==1').skip(
	    				i * 20).get().then(res => {
	    				x += 1
	    				console.log(res)
	    				for (let j = 0; j < res.result.data.length; j++) {
	    					if (res.result.data[j].date == this.date) {
	    						arraypro.push(res.result.data[j])
	    					}
	    				}
	    				if (x == batchTimes) {
	    					that.incomeList = arraypro
	    					console.log(that.incomeList)
	    				}
	    				var price = 0
	    				for (var i in this.incomeList) {
	    					price = price + parseFloat(this.incomeList[i]
	    						.cost)
	    				}
	    				that.dayincome = price;
	    				console.log(price)
	    			})
	    		} else if (this.typenow2 == '4') {
	    			db.collection('data').where('type==4&& datatype==1').skip(
	    				i * 20).get().then(res => {
	    				x += 1
	    				console.log(res)
	    				for (let j = 0; j < res.result.data.length; j++) {
	    					if (res.result.data[j].date == this.date) {
	    						arraypro.push(res.result.data[j])
	    					}
	    				}
	    				if (x == batchTimes) {
	    					that.incomeList = arraypro
	    					console.log(that.incomeList)
	    				}
	    				var price = 0
	    				for (var i in this.incomeList) {
	    					price = price + parseFloat(this.incomeList[i]
	    						.cost)
	    				}
	    				that.dayincome = price;
	    				console.log(price)
	    			})
	    		} else if (this.typenow2 == '5') {
	    			db.collection('data').where('type==5&& datatype==1').skip(
	    				i * 20).get().then(res => {
	    				x += 1
	    				console.log(res)
	    				for (let j = 0; j < res.result.data.length; j++) {
	    					if (res.result.data[j].date == this.date) {
	    						arraypro.push(res.result.data[j])
	    					}
	    				}
	    				if (x == batchTimes) {
	    					that.incomeList = arraypro
	    					console.log(that.incomeList)
	    				}
	    				var price = 0
	    				for (var i in this.incomeList) {
	    					price = price + parseFloat(this.incomeList[i]
	    						.cost)
	    				}
	    				that.dayincome = price;
	    				console.log(price)
	    			})
	    		}
	    	}
	    })*/
		};
		MedicalStore.prototype.delete_over_display = function() {
			this.data.dataList = [];
			this.data.incomeList = [];

			var num = this.Number;
			/*db.collection('data').count().then(res => {
	    	num = res.result.total;
	    	this.Number = num;
	    		const batchTimes = Math.ceil(this.Number / 20) //计算需要获取几次
	    	let arraypro1 = [] // 空数组存储每一次获取到的支出记录
	    	let arraypro2 = [] // 空数组存储每一次获取到的收入记录  
	    	let x = 0 //每次循环+1 当x等于batchTimes 说明已经到了最后一次获取数据的时候
	    	for (let i = 0; i < batchTimes; i++) {
	    		db.collection('data').where({
	    			date: that.date
	    		}).skip(i * 20).get().then(res => {
	    			x += 1
	    			for (let j = 0; j < res.result.data.length; j++) {
	    				if (res.result.data[j].datatype == '0') {
	    					arraypro1.push(res.result.data[j])
	    				} else {
	    					arraypro2.push(res.result.data[j])
	    				}
	    			}
	    			if (arraypro1)
	    				if (x == batchTimes) {
	    					that.dataList = arraypro1
	    					console.log(that.dataList)
	    				}
	    			if (arraypro2)
	    				if (x == batchTimes) {
	    					that.incomeList = arraypro2
	    					console.log(that.incomeList)
	    				}
	    			var price = 0
	    			var income = 0
	    			for (var i in this.dataList) {
	    				price = price + parseFloat(this.dataList[i].cost)
	    			}
	    			for (var i in this.incomeList) {
	    				income = income + parseFloat(this.incomeList[i].cost)
	    			}
	    			that.dayprice = price;
	    			that.dayincome = income;
	    		})
	    		console.log(that.dayprice)
	    		console.log(that.dayincome)
	    	}
	    })*/
		};
		MedicalStore.prototype.deleteitem = function(e) {
			var _this = this;
			uni.showModal({
				title: "提示",
				content: "是否删除这条记录",
				showCancel: false,
				success: function(res) {
					if (res.confirm) {
						uniCloud.callFunction({
							name: "delete",
							data: {
								id: e.currentTarget.id
							},

							success: function(res) {
								console.log(res);
							},
							fail: function(e) {
								console.log(e);
							}
						});

						_this.delete_over_display();
					} else if (res.cancel) {
						console.log("用户点击取消");
					}
				}
			});
		};
		MedicalStore.prototype.success = function(res) {
			console.log(res);
		};
		MedicalStore.prototype.fail = function(e) {
			console.log(e);
		};
		MedicalStore.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "content"},
				apivm.h(
					"view",
					{class: "loginMode"},
					apivm.h(
						"text",
						{
							class: "account",
							onClick: this.isCost,
							class: this.data.isshowCost ? "isit" : "isnot"
						},
						"支出"
					),
					apivm.h(
						"text",
						{
							class: "account",
							onClick: this.isIncome,
							class: this.data.isshowIncome ? "isit" : "isnot"
						},
						"收入"
					)
				),
				this.data.isshowCost
					? apivm.h(
							"view",
							null,
							apivm.h(
								"view",
								{class: "containere", style: "height: auto"},
								apivm.h(
									"picker",
									{
										name: "date",
										mode: "date",
										value: this.data.date,
										onChange: this.bindDateChange
									},
									apivm.h("text", {class: "isit"}, "选择查看日期：", this.data.date)
								)
							),
							apivm.h(
								"view",
								{class: "containere", style: "height: auto"},
								apivm.h(
									"picker",
									{
										name: "type",
										mode: "selector",
										value: this.data.typenow,
										onChange: this.bindTypeChange,
										range: this.data.type
									},
									apivm.h("text", {class: "isit"}, "选择消费类型： ", this.data.typenow)
								)
							),

							apivm.h(
								"view",
								{class: "contain1", style: "height: auto"},
								(Array.isArray(this.data.dataList)
									? this.data.dataList
									: Object.values(this.data.dataList)
								).map(function(item$1, index$1) {
									return apivm.h(
										"view",
										{key: index$1},
										this$1.data.dataList.length != 0
											? apivm.h(
													"view",
													null,
													apivm.h("view", {class: "num"}, index$1 + 1),
													apivm.h("view", {class: "date"}, item$1.date),
													apivm.h(
														"view",
														{class: "bill"},
														item$1.type >= 1 && item$1.type <= 4
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img1,
																		mode: "topleft"
																	})
															  )
															: null,
														item$1.type >= 5 && item$1.type <= 8
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img2,
																		mode: "topleft"
																	})
															  )
															: null,
														item$1.type >= 9 && item$1.type <= 14
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img3,
																		mode: "topleft"
																	})
															  )
															: null,
														item$1.type >= 15 && item$1.type <= 18
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img4,
																		mode: "topleft"
																	})
															  )
															: null,
														item$1.type >= 19 && item$1.type <= 22
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img5,
																		mode: "topleft"
																	})
															  )
															: null,
														item$1.type === 23
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img6,
																		mode: "topleft"
																	})
															  )
															: null,
														apivm.h(
															"view",
															{class: "information"},
															item$1.type == 1
																? apivm.h("view", {class: "typebox"}, "食品酒水-水果")
																: null,
															item$1.type == 2
																? apivm.h("view", {class: "typebox"}, "食品酒水-零食")
																: null,
															item$1.type == 3
																? apivm.h("view", {class: "typebox"}, "食品酒水-外卖")
																: null,
															item$1.type == 4
																? apivm.h("view", {class: "typebox"}, "食品酒水-聚餐")
																: null,
															item$1.type == 5
																? apivm.h("view", {class: "typebox"}, "服饰美妆-衣服裤子")
																: null,
															item$1.type == 6
																? apivm.h("view", {class: "typebox"}, "服饰美妆-化妆饰品")
																: null,
															item$1.type == 7
																? apivm.h("view", {class: "typebox"}, "服饰美妆-美容护肤")
																: null,
															item$1.type == 8
																? apivm.h("view", {class: "typebox"}, "服饰美妆-鞋帽包包")
																: null,
															item$1.type == 9
																? apivm.h("view", {class: "typebox"}, "行车交通-公交")
																: null,
															item$1.type == 10
																? apivm.h("view", {class: "typebox"}, "行车交通-打车")
																: null,
															item$1.type == 11
																? apivm.h("view", {class: "typebox"}, "行车交通-单车")
																: null,
															item$1.type == 12
																? apivm.h("view", {class: "typebox"}, "行车交通-火车")
																: null,
															item$1.type == 13
																? apivm.h("view", {class: "typebox"}, "行车交通-地铁")
																: null,
															item$1.type == 14
																? apivm.h("view", {class: "typebox"}, "行车交通-飞机")
																: null,
															item$1.type == 15
																? apivm.h("view", {class: "typebox"}, "休闲娱乐-电影")
																: null,
															item$1.type == 16
																? apivm.h("view", {class: "typebox"}, "休闲娱乐-旅游")
																: null,
															item$1.type == 17
																? apivm.h("view", {class: "typebox"}, "休闲娱乐-健身")
																: null,
															item$1.type == 18
																? apivm.h("view", {class: "typebox"}, "休闲娱乐-KTV")
																: null,
															item$1.type == 19
																? apivm.h("view", {class: "typebox"}, "恋爱基金-约会")
																: null,
															item$1.type == 20
																? apivm.h("view", {class: "typebox"}, "恋爱基金-红包")
																: null,
															item$1.type == 21
																? apivm.h("view", {class: "typebox"}, "恋爱基金-送礼")
																: null,
															item$1.type == 22
																? apivm.h("view", {class: "typebox"}, "恋爱基金-其他")
																: null,
															item$1.type == 23
																? apivm.h("view", {class: "typebox"}, "其他")
																: null,
															apivm.h("view", null, item$1.cost, "￥"),
															apivm.h("view", {class: "remarks"}, "备注:", item$1.remarks)
														)
													)
											  )
											: null,
										apivm.h(
											"button",
											{
												class: "button",
												float: "right",
												type: "default",
												size: "mini",
												onTap: this$1.deleteitem,
												id: item$1._id
											},
											"删除"
										)
									);
								}),
								this.data.dataList.length === 0
									? apivm.h(
											"view",
											null,
											apivm.h("view", null, "这一天您没有在这方面的花销哦")
									  )
									: null
							)
					  )
					: null,
				this.data.isshowIncome
					? apivm.h(
							"view",
							null,
							apivm.h(
								"view",
								{class: "containere", style: "height: auto"},
								apivm.h(
									"picker",
									{
										name: "date",
										mode: "date",
										value: this.data.date,
										onChange: this.bindDateChange
									},
									apivm.h("view", {class: "picker"}, "选择查看日期： ", this.data.date)
								)
							),
							apivm.h(
								"view",
								{class: "containere", style: "height: auto"},
								apivm.h(
									"picker",
									{
										name: "type",
										mode: "selector",
										value: this.data.incometypenow,
										onChange: this.bindIncomeTypeChange,
										range: this.data.incometype
									},
									apivm.h(
										"view",
										{class: "picker"},
										"选择收入类型： ",
										this.data.incometypenow
									)
								)
							),

							apivm.h(
								"view",
								{class: "contain1", style: "height: auto"},
								(Array.isArray(this.data.incomeList)
									? this.data.incomeList
									: Object.values(this.data.incomeList)
								).map(function(item$1, index$1) {
									return apivm.h(
										"view",
										{key: index$1},
										this$1.data.incomeList.length != 0
											? apivm.h(
													"view",
													null,
													apivm.h("view", {class: "num"}, index$1 + 1),
													apivm.h("view", {class: "date"}, item$1.date),
													apivm.h(
														"view",
														{class: "bill"},
														item$1.type == 1
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img1,
																		mode: "topleft"
																	})
															  )
															: null,
														item$1.type == 2
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img7,
																		mode: "topleft"
																	})
															  )
															: null,
														item$1.type == 3
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img8,
																		mode: "topleft"
																	})
															  )
															: null,
														item$1.type == 4
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img9,
																		mode: "topleft"
																	})
															  )
															: null,
														item$1.type == 5
															? apivm.h(
																	"block",
																	null,
																	apivm.h("image", {
																		class: "image",
																		src: this$1.data.img10,
																		mode: "topleft"
																	})
															  )
															: null,
														apivm.h(
															"view",
															{class: "information"},
															item$1.type == 1
																? apivm.h("view", {class: "typebox"}, "生活费")
																: null,
															item$1.type == 2
																? apivm.h("view", {class: "typebox"}, "兼职")
																: null,
															item$1.type == 3
																? apivm.h("view", {class: "typebox"}, "红包")
																: null,
															item$1.type == 4
																? apivm.h("view", {class: "typebox"}, "奖学金")
																: null,
															item$1.type == 5
																? apivm.h("view", {class: "typebox"}, "助学贷款")
																: null,
															apivm.h("view", null, item$1.cost, "￥"),
															apivm.h("view", {class: "remarks"}, "备注:", item$1.remarks)
														)
													)
											  )
											: null,
										apivm.h(
											"button",
											{
												class: "button",
												float: "right",
												type: "default",
												size: "mini",
												onTap: this$1.deleteitem,
												id: item$1._id
											},
											"删除"
										)
									);
								}),
								this.data.incomeList.length === 0
									? apivm.h(
											"view",
											null,
											apivm.h("view", null, "这一天您没有在这方面的收入哦")
									  )
									: null
							)
					  )
					: null
			);
		};

		return MedicalStore;
	})(Component);
	MedicalStore.css = {
		".content": {backgroundColor: "#fff9eb", height: "100%"},
		".loginMode": {
			width: "100%",
			height: "70rpx",
			backgroundColor: "#ffffff",
			display: "flex",
			whiteSpace: "nowrap",
			flexDirection: "row",
			alignItems: "flex-end",
			justifyContent: "space-around"
		},
		".isnot": {
			fontSize: "18px",
			fontWeight: "600",
			marginTop: "3px",
			color: "#D3D3D3"
		},
		".isit": {
			fontSize: "20px",
			fontWeight: "600",
			marginTop: "5px",
			borderRight: "1px solid #F8F8F8",
			color: "#ff7f0f"
		},
		".account": {height: "45px", lineHeight: "45px", display: "inline-block"},
		".contain": {
			width: "690rpx",
			borderRadius: "30rpx",
			backgroundColor: "#ffffff",
			textAlign: "center",
			display: "flex",
			flexDirection: "column",
			boxSizing: "border-box",
			fontSize: "35rpx",
			color: "#f887d6",
			margin: "30rpx auto",
			padding: "20rpx",
			position: "relative"
		},
		".text": {textAlign: "center"},
		".contain1": {
			width: "690rpx",
			borderRadius: "30rpx",
			backgroundColor: "#e9f6f8",
			display: "flex",
			flexDirection: "column",
			boxSizing: "border-box",
			fontSize: "35rpx",
			color: "#f887d6",
			margin: "30rpx auto",
			padding: "20rpx 0 20rpx 0",
			position: "relative"
		},
		".containere": {
			width: "100%",
			backgroundColor: "#ffffff",
			textAlign: "center",
			display: "flex",
			flexDirection: "column",
			boxSizing: "border-box",
			fontSize: "35rpx",
			color: "#f887d6",
			margin: "30rpx auto",
			padding: "20rpx",
			position: "relative"
		},
		".num": {
			textAlign: "center",
			color: "#f887d6",
			background: "#ffffff",
			width: "690rpx",
			position: "relative"
		},
		".date": {textAlign: "left", color: "#194eff"},
		".image": {width: "60px", height: "60px", margin: "10px"},
		".cost": {
			fontSize: "20px",
			textAlign: "left",
			color: "rgb(206, 35, 35)",
			padding: "absolute",
			top: "10px",
			left: "200px"
		},
		".coste": {fontSize: "20px", textAlign: "right"},
		".bill": {display: "flex", flexDirection: "row", marginLeft: "10px"},
		".information": {
			width: "90px",
			marginTop: "20px",
			marginLeft: "20px",
			display: "flex",
			flexDirection: "column",
			color: "red"
		},
		".typebox": {fontSize: "30rpx", wordBreak: "break-all", color: "#ff9170"},
		".remarks": {fontSize: "27rpx", wordBreak: "break-all", color: "#7a7878"},
		".btn-area": {marginTop: "40rpx"},
		".buttone": {alignItems: "right"},
		".button": {
			margin: "auto 150rpx",
			textAlign: "right",
			left: "60px",
			bottom: "20px"
		},
		".row": {padding: "50rpx 20rpx", borderBottom: "2px solid rgb(61, 180, 81)"}
	};
	apivm.define("medical_store", MedicalStore);
	apivm.render(apivm.h("medical_store", null), "body");
})();
