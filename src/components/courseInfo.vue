<template>
	<div>
		<el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
			<el-table-column prop="courseId" label="课程号" sortable width="180" column-key="courseId">
			</el-table-column>
			<el-table-column prop="courseName" label="课程名" width="180">
			</el-table-column>
			<el-table-column prop="courseTag" label="课程类型" :formatter="formatter" :filters="[{text: '必修课程', value: '必修课程'}, {text: '选修课程', value: '选修课程'}]"
			 :filter-method="filterTag" filter-placement="bottom-end">
				<template slot-scope="scope">
					<el-tag :type="scope.row.courseTag == '必修课程' ? 'primary' : 'success'" disable-transitions>{{scope.row.courseTag}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column prop="courseCredit" label="课程学分" width="100">
			</el-table-column>
		</el-table>
		<p></p>
		<div style="text-align: center;margin-top: 30px;">
			<el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
			</el-pagination>
		</div>
		<!-- <el-button @click="resetDateFilter" round>清除</el-button> -->
	</div>
</template>

<script>
	import TeacherApi from '../api/teacher.js'
	export default {
		data() {
			return {
				multipleSelection: [],
				total: 250,
				pagesize: 4,
				currentPage: 1,
				tableData: [],
			}
		},
		methods: {
			resetDateFilter() {
				this.$refs.filterTable.clearFilter('courseId');
			},
			clearFilter() {
				this.$refs.filterTable.clearFilter();
			},
			formatter(row, column) {
				return row.address;
			},
			filterTag(value, row) {
				return row.courseTag === value;
			},
			filterHandler(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			},
			current_change(currentPage) {
				this.currentPage = currentPage
			},
			getCourseInfo() {
				TeacherApi.getCourseInfo(this.$store.state.id).then(res => {
					this.getCourseInfo()
					this.tableData = res.tableData
					
				})
			},	
		},
		created(to, from, next) {
			this.getCourseInfo()
		}
		
	}
</script>
