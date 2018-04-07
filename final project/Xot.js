class Xot extends KendaniEak {

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply = 3 && norVandak) {
            var norXot = new Xot(norVandak[0], norVandak[1]);
            xotArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 2;
        }
    }

}
