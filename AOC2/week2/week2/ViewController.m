//
//  ViewController.m
//  week2
//
//  Created by Jeff Mitsou on 7/20/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "ViewController.h"
#import "infoView.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(IBAction)background:(id)sender
{
    UISegmentedControl *colorChanger = (UISegmentedControl*)sender;
    if (colorChanger != nil)
    {
        if (colorChanger.selectedSegmentIndex == 0)
        {
            self.view.backgroundColor = [UIColor lightGrayColor];
        }
        else if (colorChanger.selectedSegmentIndex == 1)
        {
            self.view.backgroundColor = [UIColor brownColor];
        }
        else if (colorChanger.selectedSegmentIndex == 2)
        {
            self.view.backgroundColor = [UIColor orangeColor];
        }
        else if (colorChanger.selectedSegmentIndex == 3)
        {
            self.view.backgroundColor = [UIColor redColor];
        }
    }
}

-(IBAction)onclick:(id)sender
{
    UIButton *button = (UIButton*)sender;
    if (button == breakfastButton)
    {
        breakfastButton.enabled = false;
        lunchButton.enabled = true;
        dinnerButton.enabled = true;
        textbox.text =@"Pancakes cost $2 per plate.";
    }
    else if (button == lunchButton)
    {
        lunchButton.enabled = false;
        breakfastButton.enabled = true;
        dinnerButton.enabled = true;
        textbox.text =@"Subs cost $5 per Sub.";
    }
    else if (button == dinnerButton)
    {
        dinnerButton.enabled = false;
        breakfastButton.enabled = true;
        lunchButton.enabled = true;
        textbox.text = @"Drinks cost $3 a piece.";
    }
}

-(IBAction)onChange:(id)sender
{
    
    if (quantity != nil) {
        int currentValue = quantity.value;
        
        UIButton *button = (UIButton*)sender;
        if (button.tag == 0) {
            label.text = [NSString stringWithFormat:@"%d",currentValue];
        }
        
    }
    
}

-(IBAction)sumUp:(id)sender
{
    
    
    int stepNum = quantity.value;
    
    if (breakfastButton.enabled == NO)
    {
        //breakfast details
        breakfast *breakf = (breakfast*)[Restaurant createNewMenu: BREAKFAST];
        if (breakf != nil)
        {
            [breakf setOrdersOfPancakes:5];
            [breakf findTotal];
            int price = breakf.priceOfOrder * stepNum;
            textbox.text = [NSString stringWithFormat:@"It will cost $%i for %d plates.", price,stepNum];
            lunchButton.enabled = YES;
            dinnerButton.enabled = YES;
        }
    }
    else if (lunchButton.enabled == NO)
    {
        //lunch details
        lunch *lun = (lunch*)[Restaurant createNewMenu: LUNCH];
        if (lun != nil)
        {
            [lun setNumberOfSubs:5];
            [lun findTotal];
            int price = lun.priceOfSub * stepNum;
            textbox.text = [NSString stringWithFormat:@"It will cost $%i for %d Subs.", price,stepNum];
            breakfastButton.enabled = YES;
            dinnerButton.enabled = YES;
        }
    }
    else if (dinnerButton.enabled == NO)
    {
        //dinner details
        dinner *din = (dinner*)[Restaurant createNewMenu: DINNER];
        if (din != nil)
        {
            [din setNumberOfDrinks:5];
            [din findTotal];
            int price = din.priceOfDrinks * stepNum;
            textbox.text = [NSString stringWithFormat:@"It will cost $%i for %d drinks.", price,stepNum];
            breakfastButton.enabled = YES;
            lunchButton.enabled = YES;
        }
    }
    
    
}


-(IBAction)showInfoPage:(id)sender
{
    infoView *altView = [[infoView alloc]initWithNibName:@"infoView" bundle:nil];
    if (altView != nil)
    {
        [self presentViewController:altView animated:true completion:nil];
    }
    
}

@end
