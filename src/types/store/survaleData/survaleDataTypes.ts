import { commonApiTypes } from 'types/common';

export interface ISurvaleDataResponse {
    survaleId?: string | string[] | null;
    survaleDetailId?: string | string[] | null;
    data: null | ISurvaleDataDetails;
    hiddenAnswersJSON?: any;
    // hiddenAnswersJSON?: IHiddenAnswersJSON[];
    rsq?: string | string[] | null;
}

export interface ISurvaleDataReducer {
    isLoading: boolean;
    isSuccess?: boolean;
    currentQuestion: IQuestionData | null;
    levelQuestions: ILevelQuestions[];
    payloadQuestions: IQuestionData[];
    localQuestions: IQuestionData[];
    isSubmitSection: boolean;
    currentLanguage: string | null;
    questionSNumbersLevel: IQuestionNumbersLevel[];
    questionSNumbers: IQuestionNumbers[];
    navType: string;
}

export interface IQuestionNumbers {
    questionSNo: string;
    questionId: number | null;
}

export interface IQuestionNumbersLevel {
    level: number;
    questionId: number;
}

export interface ISurvaleData extends commonApiTypes.IApiFailed, ISurvaleDataResponse, ISurvaleDataReducer {}

// Other Actions
export interface IUpdateLocalQuestion {
    question: IQuestionData | null;
}
export interface IUpdateLocalQuestions {
    questions: IQuestionData[];
}
export interface IUpdatePayloadQuestions {
    type: string;
    question: IQuestionData | null;
}
export interface ILevelQuestions {
    level: number;
    questions: IQuestionData[];
}
export interface ISurvaleDataDetails {
    title: string;
    buttonColor: string;
    type: string;
    internal: string;
    intro: string;
    introEnglish: string;
    introFooter: string;
    introFooterEnglish: string;
    languages: ILanguage[];
    thankyou: string;
    questions: IQuestionData[];
    backgroundImage: string;
    privacy: {
        link: string;
        anonymous: boolean;
    };
    closeSurvey: boolean;

    employeeSurvey: {
        title: string;
        id: number;
    };
    followupSurvey: {
        title: string;
        id: number;
    };
    hiddenQ: IHiddenQuestions[];
    selectInnerColor: boolean;
    selectInnerImage: boolean;
    backgroundInnerColor: string;
    titleColor: string;
    sendNotifications: boolean;
    notificationEmailAddresses: string;
    captchaSiteKey: string;
    showProgressBar: boolean;
    selectColor: boolean;
    selectImage: boolean;
    backgroundColor: string;
    fadeBackground: boolean;
    clientId: number;
    backgroundImageFull: string;
    backgroundInnerImage: string;
    postSurveyActions: {
        displayHTML: boolean;
        conditionalHTML: {
            html: string;
            minNPS: number;
        };
        displayCoupon: boolean;
        couponDetails: {
            couponHTML: string;
        };
    };
    needsSurveyResponseEscalation: boolean;
    showQuestionNumbers: boolean;
    status: string;
    surveyType: string;
    // surveyVariables
    surveyVariables: ISurveyVariables[];
    backgroundImageContain: boolean;
    selectFillinColor: boolean;
    backgroundFillinColor: string;
    postId: string;
    savePartialResponse: boolean;
    saveSurveyProgress: boolean;
}

export interface ILanguage {
    internal: string;
    intro: string;
    introFooter: string;
    language: string;
    thankyou: string;
}

export interface IQuestionData {
    // Question Common
    title: string;
    questionType: string;
    required: boolean;
    requiredColorBlack: boolean;
    requiredColorRed: boolean;
    disableQuestion: boolean;

    savedTags: [];
    addedTags: [];
    emailList: {
        title: string;
        id: number;
        defaultEmail: string;
    };
    instructions: string;
    minimize: boolean;
    tags: string[];
    questionId: number;
    errorMessage: boolean;
    noClientMatch: boolean;
    clientId: number;
    questionDisplayIndex: number;
    languageSpecific: boolean;
    originalTags: string[];
    tag: [null];
    originalTag: [null];

    // High/Low Scale Question Type
    languages: IQuestionLanguage[];
    hiLo: {
        scaleOption?: {
            name: string; // Graphic Faces or Radio Button
            id: number;
        };

        labels?: ILabels[];
        scale?: string;
        highOption?: number;
        lowOption?: number;
        highLowOption?: {
            id: number;
            name: string;
        };

        answer: string; // For Answer
        slideVal: number; // For Answer
    };
    relatedQuestion: {
        questionId: string;
        questionTitle: string;
    };

    // Multiple Choice Question Type
    answers: IAnswers[];
    customizeText: boolean;
    multipleChoiceRating: boolean;
    multipleChoice: {
        scale: string;
    };
    benchmark: string;

    // MultiSelect
    multipleSelect: {
        scale: string;
        limit: number | null;
    };

    // Matrix Sclae 1 - 10
    matrix: {
        scale: string;
        rowLabels: IRowLabel[];
        labelColors: string[];
        columnLabels: IColumnLabel[];
    };

    // matrixQuestion
    matrixQuestion: IMatrixQuestion;
    subGroupQuestions: ISubGroupQuestion[];

    // nps
    nps: INpsData;

    // Answer Payloads
    notApplicable: boolean; // If False Show NA
    otherOptionText: string;

    // Common
    l: number | null;
    a: number | null;
    NA: boolean;
    otherChecked: boolean;
    comment: string | null; // ShortAnswer, Long Answer, Multiple Choice

    // Multiple Choice
    responses: {
        answerText: string;
        selected: boolean;
    } | null;

    // Multiple Select
    selectedAnswers: [] | any;

    // Talent Pool
    talentPool: ITalentPoolAnswer;
}

export interface IQuestionLanguage {
    instructions: string;
    language: string;
    title: string;
    questionType: string;
    answers: IAnswers[];
    matrix: {
        scale: string;
        rowLabels: IRowLabel[];
        labelColors: string[];
        columnLabels: IColumnLabel[];
    };
    matrixQuestion: IMatrixQuestion;
    talentPool: ITalentPoolAnswer;
}

export interface IMatrixQuestion {
    scale: string;
    rowLabels: IRowLabel[];
    columnLabels: IColumnLabel[];
}

export interface ISubGroupQuestion {
    clientId: number;
    minimize: boolean;
    options: ISubGroupQuestionOption[];
    questionId: number;
    questionType: string;
    title: string;
    slideVal: number;
}

export interface ISubGroupQuestionOption {
    addOptions: boolean;
    enteredOptions: string;
    markNA: boolean;
    name: string;
}

export interface ITalentPoolAnswer {
    answers: ITalentPoolAnswerText[];
}

export interface ITalentPoolAnswerText {
    answerText: string;
    selected: boolean;
}

export interface INpsData {
    branching: boolean;
    options: IAnswers[];
}

export interface ISurveyVariables {
    variableName: string;
    variableValue: string;
}

export interface IRowLabel {
    buttonClicked: number;
    buttonSelect: boolean;
    selectedLabelColor: string;
    slideVal: number;
    name: string;
    labelColors: ILabelColor[];
    columnLabels: IColumnLabel[];
}

export interface IColumnLabel {
    name: string;
    markNA?: boolean;
    selected: boolean;
}

// High Low Question
export interface ILabels {
    name: string;
    id: number;
}

export interface ILabelColor {
    bgColor: string;
    id: number;
    label: number;
    selected: boolean;
}

// Multiple Choice and NPS Options
export interface IAnswers {
    addQuestions: boolean;
    followupQuestions: boolean;
    answerText: string;
    skip: boolean;

    questions: IQuestionData[];
    selected: boolean;
    skipQuestion: string;
    skipQuestionId: number | null;
    skipToQuestion: boolean;

    id: number;
    btnColor: string;
    range: string;
}

// Success Payload
export interface IHiddenAnswersJSON {
    [key: number]: string | undefined;
}

export interface IHiddenQuestions {
    questionId: number;
    questionText: string;
    questionType: string;
}
