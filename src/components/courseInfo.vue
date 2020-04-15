<template>
	<div>

		<el-table ref="filterTable" :data="tempList" style="width: 100%">
			<el-table-column prop="date" label="日期" sortable width="180" column-key="date" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
			 :filter-method="filterHandler">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址" :formatter="formatter">
			</el-table-column>
			<el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
			 :filter-method="filterTag" filter-placement="bottom-end">
				<template slot-scope="scope">
					<el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
				</template>
			</el-table-column>
		</el-table>
		<p></p>
		<div class="paginationClass">

			 <el-pagination   @size-change="handleSizeChange1"   @current-change="handleCurrentChange1" :current-page="currentPage1"
			   :page-sizes="[10, 20, 50, 100]"   :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"   :total="total1">
				  </el-pagination>
			<el-button @click="clearFilter" round>清除筛选</el-button>
			 
		</div>

		<!-- <el-button @click="resetDateFilter" round>清除</el-button> -->


	</div>
</template>

<script>
	export default {
		data() {
			return {
				tempList:[],
				total1: 19,
				currentPage1: 1,
				pageSize: 10,
				bondsAllList: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					tag: '家'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					tag: '公司'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					tag: '家'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					tag: '公司'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					tag: '家'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					tag: '公司'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					tag: '家'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					tag: '公司'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					tag: '家'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					tag: '公司'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					tag: '家'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					tag: '公司'
				}, ],
				
			}
		},
		methods: {
			resetDateFilter() {
				this.$refs.filterTable.clearFilter('date');
			},
			clearFilter() {
				this.$refs.filterTable.clearFilter();
			},
			formatter(row, column) {
				return row.address;
			},
			filterTag(value, row) {
				return row.tag === value;
			},
			filterHandler(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			},
			handleSizeChange1: function(pageSize) { // 每页条数切换
				this.pageSize = pageSize
				this.handleCurrentChange1(this.currentPage1);
			},
			handleCurrentChange1: function(currentPage) { //页码切换
				this.currentPage1 = currentPage
				this.currentChangePage(this.bondsAllList, currentPage)

			},
			currentChangePage(list, currentPage) {
				let from = (currentPage - 1) * this.pageSize;
				let to = currentPage * this.pageSize;
				this.tempList = [];
				for (; from < to; from++) {
					if (list[from]) {
						this.tempList.push(list[from]);
					}
				}
				
			},
			

		}
	}
</script>
