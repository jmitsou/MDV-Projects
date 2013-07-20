//
//  ViewController.m
//  weekOne
//
//  Created by Jeff Mitsou on 6/4/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "ViewController.h"
#import "Restaurant.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    week1 = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 320, 20)];
    week1.text =@"AOC2 Week 1 Assignment";
    week1.backgroundColor = [UIColor blackColor];
    week1.textAlignment = NSTextAlignmentCenter;
    week1.textColor = [UIColor whiteColor];
    [self.view addSubview:week1];
    
    breakfast *breakfastdetails=(breakfast*)[Restaurant createNewMenu:BREAKFAST];
    [breakfastdetails setPriceOfOrder:3];
    [breakfastdetails findTotal];
    NSString *breakstatement = @"Breakfast was delicious";
    [breakfastdetails setStatment:breakstatement];
    NSLog(@"%@",[breakfastdetails statment]);
    
    //Label 1
    breakLabel1 = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 30.0f, 320.0f, 40.0f)];
    breakLabel1.text = [NSString stringWithFormat:@"I ate %i orders of pancakes for %i dollars a plate.", [breakfastdetails ordersOfPancakes], [breakfastdetails priceOfOrder]];
    breakLabel1.numberOfLines=10;
    breakLabel1.backgroundColor = [UIColor brownColor];
    breakLabel1.textAlignment = NSTextAlignmentLeft;
    breakLabel1.textColor = [UIColor whiteColor];
    [self.view addSubview:breakLabel1];
    
    //Label 2
    breakLabel2 = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 80.0f, 320.0f, 40.0f)];
    breakLabel2.text = [NSString stringWithFormat:@"The bill came to $%i. %@.", [breakfastdetails total], [breakfastdetails statment]];
    breakLabel2.numberOfLines=10;
    breakLabel2.backgroundColor = [UIColor brownColor];
    breakLabel2.textAlignment = NSTextAlignmentLeft;
    breakLabel2.textColor = [UIColor whiteColor];
    [self.view addSubview:breakLabel2];
    
    lunch *lunchdetails=(lunch*)[Restaurant createNewMenu:LUNCH];
    [lunchdetails setPriceOfSub:7];
    [lunchdetails findTotal];
    NSString *lunchstatement = @"I should have went to Subway.";
    [lunchdetails setStatment:lunchstatement];
    NSLog(@"%@",[lunchdetails statment]);
    
    //Label 3
    lunchLabel1 = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 130.0f, 320.0f, 40.0f)];
    lunchLabel1.text = [NSString stringWithFormat:@"I bought %i subs for $%i dollars a piece.", [lunchdetails numberOfSubs], [lunchdetails numberOfSubs]];
    lunchLabel1.numberOfLines=10;
    lunchLabel1.backgroundColor = [UIColor orangeColor ];
    lunchLabel1.textAlignment = NSTextAlignmentLeft;
    lunchLabel1.textColor = [UIColor whiteColor];
    [self.view addSubview:lunchLabel1];
    
    //Label 4
    lunchLabel2 = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 180.0f, 320.0f, 60.0f)];
    lunchLabel2.text = [NSString stringWithFormat:@"The total for the subs was $%i. %@", [lunchdetails total], [lunchdetails statment]];
    lunchLabel2.numberOfLines=20;
    lunchLabel2.backgroundColor = [UIColor orangeColor ];
    lunchLabel2.textAlignment = NSTextAlignmentLeft;
    lunchLabel2.textColor = [UIColor whiteColor];
    [self.view addSubview:lunchLabel2];
    
    dinner *dinnerdetails=(dinner*)[Restaurant createNewMenu:DINNER];
    [dinnerdetails setPriceOfDrinks:4];
    [dinnerdetails findTotal];
    NSString *dinnerstatement = @"The extras make a huge difference on the bill.";
    [dinnerdetails setStatment:dinnerstatement];
    NSLog(@"%@",[dinnerdetails statment]);
    
    //Label 5
    dinnerLabel1 = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 250.0f, 320.0f, 40.0f)];
    dinnerLabel1.text = [NSString stringWithFormat:@"Dessert was $%i and the drinks were $%i after the first drink.", [dinnerdetails numberOfDrinks], [dinnerdetails priceOfDrinks]];
    dinnerLabel1.numberOfLines=10;
    dinnerLabel1.backgroundColor = [UIColor redColor ];
    dinnerLabel1.textAlignment = NSTextAlignmentLeft;
    dinnerLabel1.textColor = [UIColor blackColor];
    [self.view addSubview:dinnerLabel1];
    
    //Label 6
    dinnerLabel2 = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 300.0f, 320.0f, 40.0f)];
    dinnerLabel2.text = [NSString stringWithFormat:@"It was $%i all together. %@", [dinnerdetails total], [dinnerdetails statment]];
    dinnerLabel2.numberOfLines=20;
    dinnerLabel2.backgroundColor = [UIColor redColor ];
    dinnerLabel2.textAlignment = NSTextAlignmentLeft;
    dinnerLabel2.textColor = [UIColor blackColor];
    [self.view addSubview:dinnerLabel2];
    
    name = [[UILabel alloc] initWithFrame:CGRectMake(0, 370, 320, 20)];
    name.text =@"By: Jeff Mitsou";
    name.backgroundColor = [UIColor blackColor];
    name.textAlignment = NSTextAlignmentLeft;
    name.textColor = [UIColor whiteColor];
    [self.view addSubview:name];

    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
