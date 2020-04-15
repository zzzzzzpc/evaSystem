<template>
	<div>

		<el-table ref="filterTable" :data="bondsAllList" style="width: 100%">
			<el-table-column prop="num" label="序号" sortable width="180" column-key="date">
			</el-table-column>
			<el-table-column prop="cname" label="课程" width="180">
			</el-table-column>
			<el-table-column prop="eva" label="评价值">
			</el-table-column>
			<el-table-column prop="tag" label="是否被预警" width="100" :filters="[{ text: '是', value: '是' }, { text: '否', value: '否' }]"
			 :filter-method="filterTag" filter-placement="bottom-end">
				<template slot-scope="scope">
					<el-tag :type="scope.row.tag === '是' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
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
				total1: 4,
				currentPage1: 1,
				pageSize: 10,
				bondsAllList: [{
					num: '1',
					cname: '软件工程',
					eva:80,
					gradeeva:77,
					individual:66,
					grade: 90,
					tag: '是'
				}, {
					num: '2',
					cname: '操作系统',
					eva:80,
					gradeeva:77,
					individual:66,
					grade: 60,
					tag: '是'
				},{
					num: '3',
					cname: 'ERP',
					eva:80,
					gradeeva:77,
					individual:66,
					grade: 80,
					tag: '否'
				},{
					num: '4',
					cname: '高级数据库',
					eva:80,
					gradeeva:77,
					individual:66,
					grade: 70,
					tag: '是'
				},],
				
			}
		},
		methods: {
			resetDateFilter() {
				this.$refs.filterTable.clearFilter('date');
			},
			clearFilter() {
				this.$refs.filterTable.clearFilter();
			},
			// formatter(row, column) {
			// 	return row.grade;
			// },
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
