import querystring from 'querystring'

describe('querystring API exploration', () => {
	it('will stringify filter arguments', () => {
		expect(
			querystring.stringify({ $filter: "function eq 'Research'" }),
		).toEqual("%24filter=function%20eq%20'Research'")
	})

	it('will parse out filter arguments', () => {
		expect(querystring.parse("%24filter=function%20eq%20'Research'")).toEqual({
			$filter: "function eq 'Research'",
		})
	})
})
