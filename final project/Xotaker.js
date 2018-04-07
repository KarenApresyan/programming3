class Xotaker extends KendaniEak {
    sharjvel() {
        this.yntrelVandak();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (exanak == ("garun")) {
            if(this.energy == 5){
            xotakerArr.push(new Xotaker(this.x, this.y));
            this.energy = 3;
          }
        }
        else if (exanak == ("amar")) {
            if(this.energy == 6){
            xotakerArr.push(new Xotaker(this.x, this.y));
            this.energy = 3;
          }
        }
         else if (exanak == ("ashun")) {
            if(this.energy == 6){
            xotakerArr.push(new Xotaker(this.x, this.y));
            this.energy = 3;
          }
        }
         else if (exanak == ("dsmer")) {
            if(this.energy == 7){
            xotakerArr.push(new Xotaker(this.x, this.y));
            this.energy = 3;
          }
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(1));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 2;
            this.energy++;
            this.bazmanal();
            for (var i in xotArr) {
                if (this.x == xotArr[i].x && this.y == xotArr[i].y) {
                    xotArr.splice(i, 1)
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var v in xotakerArr) {
                if (this.x == xotakerArr[v].x && this.y == xotakerArr[v].y) {
                    xotakerArr.splice(v, 1)
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }
}
