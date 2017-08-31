/**
 * @Author: Q.S. Wang <qiangswa>
 * @Date:   2017-07-11T16:22:38+10:00
 * @Email:  wangqs_eclipse@yahoo.com
 * @Filename: AddImageItemCommand.js
 * @Last modified by:   qiangswa
 * @Last modified time: 2017-07-18T11:48:56+10:00
 * @Copyright: Q.S. Wang(wangqs_eclipse@yahoo.com)
 */
import paper from 'paper';

import {
    toDepositoryPath,
    uuid4
} from 'utils/utils';


// import logger from 'logger';

export default class AddImageItemCommand {
    constructor(source,position) {
        this.source = source;
        this.position = position;
        this.name='AddImageItemCommand';
    }

    execute() {
        this.image = new paper.Raster(this.source,this.position);
        this.image.name = uuid4();
        return this.image;
    }

    redo() {
        paper.project.activeLayer.addChild(this.image);
        return this.image;
    }

    undo() {
        if (this.image) {
            const depositoryPath = toDepositoryPath(this.image);
            const name = this.image.name;
            this.image.remove();
            return {
                depositoryPath: depositoryPath,
                name: name
            };
        }
    }
}
