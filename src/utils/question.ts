export type QuestionType = boolean | number | string;

export type QuestionTypeString = 'boolean' | 'number' | 'string';

export type QuestionOperation = 'truthy' | 'compare' | 'equal';

export type QuestionOperator = 'boolean' | 'lessThan' | 'greaterThan' | 'greaterThanEqual' | 'lessThanEqual' | 'equal';

export interface IConstraint {
    operation: QuestionOperation;
    operator: QuestionOperator;
    value: string;
}

export interface IQuestion {
    id: string;
    title: string;
    type: QuestionTypeString;
    onSuccessNextQuestionId: string;
    onFailureNextQuestionId: string;
    constraintSuccess: IConstraint[];
    constraintFailure: IConstraint[];
    answer?: QuestionType;
}