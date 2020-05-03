export class Alert{
    constructor(
        public readonly alertType: AlertType, 
        private readonly message: string
    ){}
}

export enum AlertType{
    SUCCESSS,
    WARNING,
    DANGER,
    INFO
}

