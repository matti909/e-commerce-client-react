import makeRequest from "./makeReq";


const endPoint = "products?populate=*";

export const Products = {

	getAll: async function ({ pagination = 1 }: { pagination?: number }) {
		const res = await makeRequest.get(endPoint, {
			params: {
				pagination
			}
		})
		const drama = res.data.data;
		const format = drama.map((el: any) => {
			return {
				id: el.attributes.id,
				name: el.attributes.title,
				price: el.attributes.price,
				description: el.attributes.description,
				image: el.attributes.image.data.attributes.url
			}
		})
		return format;
	},

	getById: function ({ id }: { id: number }) {
		return makeRequest.get(`${endPoint}/${id}`)
	}
}