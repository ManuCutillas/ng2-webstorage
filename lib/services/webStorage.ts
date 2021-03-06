import {EventEmitter} from '@angular/core';
import {KeyStorageHelper, WebStorageHelper, StorageObserverHelper} from '../helpers';
import {IStorage} from '../interfaces';
import {STORAGE} from '../enums/storage';

export class WebStorage implements IStorage {

	private sType:STORAGE = null;

	constructor(sType:STORAGE) {
		this.sType = sType;
	}

	public store(raw:string, value:any):void {
		let sKey = KeyStorageHelper.genKey(raw);
		WebStorageHelper.store(this.sType, sKey, value);
	}

	public retrieve(raw:string):any {
		let sKey = KeyStorageHelper.genKey(raw);
		return WebStorageHelper.retrieve(this.sType, sKey);
	}

	public clear(raw?:string):void {
		if(raw) WebStorageHelper.clear(this.sType, KeyStorageHelper.genKey(raw));
		else WebStorageHelper.clearAll(this.sType);
	}

	public observe(raw:string):EventEmitter {
		let sKey = KeyStorageHelper.genKey(raw);
		return StorageObserverHelper.observe(this.sType, sKey);
	}

}
