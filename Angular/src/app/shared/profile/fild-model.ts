
export class Fild{

	constructor(	
		fildName: string = '',
		value: string = '',
		fildNameInModel: string = '',
		editable: boolean = true,
		isBool: boolean = false,
		isDropDown: boolean = false,
		dropDownValues: Array<string> = []
		)
	{

		this.fildName = fildName;
		this.value = value;
		this.fildNameInModel = fildNameInModel;
		this.editable = editable;
		this.isBool = isBool;
		this.isDropDown = isDropDown;
		this.dropDownValues = dropDownValues;

	}

	public fildName: string;
	public value: string;
	public fildNameInModel: string;
	public editable: boolean;
	public isBool: boolean;
	public isDropDown: boolean;
	public dropDownValues: Array<string>;

}