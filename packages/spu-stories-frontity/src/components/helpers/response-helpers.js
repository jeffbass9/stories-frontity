import {responseDepartments} from "../../config"

const getArticlesFromDepartment = ({ article }, departmentId) =>
	Object.keys(article)
		.map(articleID => article.id)
		.filter((["response-department"]) => article["response-department"].includes(parseInt(departmentId) ) )

const getArticlesGroupedByDepartment = source => {
	return Object.keys(responseDepartments)
		.reduce((acc, departmentId) => {
			const articles = getArticlesFromDepartment(source.article, departmentId)
			const department = source["response-department"][departmentId]
			return [{articles, department}, ...acc]
		}, [] )
	}

export default getArticlesGroupedByDepartment;
