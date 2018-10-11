export class CounterService{
    activeToInactive = 0;
    inactiveToActive =0;

    incrementCounter(isActiveToInactive: boolean)
    {
        if(isActiveToInactive)
        {
            this.activeToInactive++;
            console.log('Active to Inactive '+this.activeToInactive);
        }
        else{
            this.inactiveToActive++;
            console.log('Inactive to Active '+this.inactiveToActive);
        }
    }
}

