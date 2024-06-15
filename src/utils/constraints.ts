import { IConstraint, QuestionType } from './question';

export function evaluateConstraints(constraints: IConstraint[], value: QuestionType): boolean {
    console.log(constraints, value);

    return constraints.every(constraint => {
        switch (constraint.operation) {
            case 'compare':
                const numericValue = parseFloat(constraint.value);

                if (isNaN(numericValue))
                    return false;

                switch (constraint.operator) {
                    case 'lessThan':
                        return (value as number) < numericValue;
                    case 'greaterThan':
                        return (value as number) > numericValue;
                    default:
                        return false;
                }
            case 'truthy':
                if (constraint.operator === 'boolean') {
                    return value === constraint.value;
                }

                return false;

            case 'equal':
                return value === constraint.value;
            default:
                return false;
        }
    });
}