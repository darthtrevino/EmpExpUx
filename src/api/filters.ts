import { FilterExpression, FieldExpression, BooleanExpression } from './model'

export function serialize(expr: FilterExpression) {
	// if the expression is a simple field, then handle it
	if (isFieldExpression(expr)) {
		return serializeFieldExpression(expr as FieldExpression)
	} else {
		return serializeBooleanExpression(expr as BooleanExpression)
	}
}

function isFieldExpression(expr: FilterExpression) {
	return !!(expr as FieldExpression).field
}

function serializeFieldExpression(expr: FieldExpression) {
	console.log('EXPR', expr.field, expr.value)
	const value = expr.field.numeric ? `${expr.value}` : `'${expr.value}'`
	if (expr.field.iterable) {
		return `${expr.field.name}/any(t: t ${expr.op} ${value})`
	} else {
		return `${expr.field.name} ${expr.op} ${value}`
	}
}

function serializeBooleanExpression(expr: BooleanExpression) {
	// TODO: currently this only supports one-level boolean expressions. That limitation may be reasonable.
	const clauses = expr.clauses.map(e =>
		serializeFieldExpression(e as FieldExpression),
	)
	return clauses.join(` ${expr.op} `)
}
