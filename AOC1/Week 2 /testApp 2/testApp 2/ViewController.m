//
//  ViewController.m
//  testApp 2
//
//  Created by Jeff Mitsou on 5/16/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    //Main Background Color
    self.view.backgroundColor = [UIColor colorWithRed:0.875 green:0.412 blue:0.169 alpha:1] /*#df692b*/;
    
    //Title Label for book
    bookTitle = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 0.0f, 320.0f, 20.0f)];
    
    if (bookTitle !=nil) {
        bookTitle.backgroundColor = [UIColor blackColor];
        bookTitle.text = @"Catching Fire";
        bookTitle.textAlignment = NSTextAlignmentCenter;
        bookTitle.textColor = [UIColor whiteColor];
    }
    [self.view addSubview:bookTitle];
    
    //Author Label for book
    authorBlock = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 25.0f, 100.0f, 20.0f)];
    
    if (authorBlock !=nil) {
        authorBlock.backgroundColor = [UIColor colorWithRed:0.584 green:0.094 blue:0.11 alpha:1] /*#95181c*/;
        authorBlock.text = @"Author:";
        authorBlock.textAlignment = NSTextAlignmentRight;
        authorBlock.textColor = [UIColor brownColor];
    }
    [self.view addSubview:authorBlock];
    
    //Author Name for book
    authorName = [[UILabel alloc] initWithFrame:CGRectMake(100.0f, 25.0f, 220.0f, 20.0f)];
    
    if (authorName !=nil) {
        authorName.backgroundColor = [UIColor colorWithRed:0.365 green:0.055 blue:0.035 alpha:1] /*#5d0e09*/;
        authorName.text = @" Suzanne Collins";
        authorName.textAlignment = NSTextAlignmentLeft;
        authorName.textColor = [UIColor blueColor];
    }
    [self.view addSubview:authorName];
    
    //Publisher Label for book
    publisherBlock = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 50.0f, 100.0f, 20.0f)];
    
    if (publisherBlock !=nil) {
        publisherBlock.backgroundColor = [UIColor colorWithRed:0.475 green:0.153 blue:0.165 alpha:1] /*#79272a*/;
        publisherBlock.text = @"Published:";
        publisherBlock.textAlignment = NSTextAlignmentRight;
        publisherBlock.textColor = [UIColor orangeColor];
    }
    [self.view addSubview:publisherBlock];
    
    //Publisher Date for book
    publisherDate = [[UILabel alloc] initWithFrame:CGRectMake(100.0f, 50.0f, 220.0f, 20.0f)];
    
    if (publisherDate !=nil) {
        publisherDate.backgroundColor = [UIColor darkGrayColor];
        publisherDate.text = @" June 2010";
        publisherDate.textAlignment = NSTextAlignmentLeft;
        publisherDate.textColor = [UIColor purpleColor];
    }
    [self.view addSubview:publisherDate];
    
    //Summary Label for book
    summaryBlock = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 75.0f, 100.0f, 20.0f)];
    
    if (summaryBlock !=nil) {
        summaryBlock.backgroundColor = [UIColor brownColor];
        summaryBlock.text = @"Summary:";
        summaryBlock.textAlignment = NSTextAlignmentLeft;
        summaryBlock.textColor = [UIColor greenColor];
    }
    [self.view addSubview:summaryBlock];
    
    //Summary Paragraph for book
    summaryP = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 100.0f, 320.0f, 200.0f)];
    
    if (summaryP !=nil) {
        summaryP.backgroundColor = [UIColor yellowColor];
        summaryP.text = @"The girl on Fire and her partner Pete have won the tournament. Their defiance against the rules of the annual game and rules in Capital city seems to be catching up to them. The promise of a save life and food for them and their families seems to be in danger. The Capital is angry and a rumor of rebellion puts The Capital of a road to revenge.";
        summaryP.textAlignment = NSTextAlignmentCenter;
        summaryP.textColor = [UIColor lightGrayColor];
        summaryP.numberOfLines = 10;
    }
    [self.view addSubview:summaryP];
    
    //List Items Label for book
    listBlock = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 305.0f, 100.0f, 20.0f)];
    
    if (listBlock !=nil) {
        listBlock.backgroundColor = [UIColor colorWithRed:1 green:0.957 blue:0.651 alpha:1] /*#fff4a6*/;
        listBlock.text = @"List of Items:";
        listBlock.textAlignment = NSTextAlignmentLeft;
        listBlock.textColor = [UIColor magentaColor];
    }
    [self.view addSubview:listBlock];
    
    //Array strings
    
    item1 = @"Bow";
    item2 = @"Pendent";
    item3 = @"Rose";
    item4 = @"Friends";
    item5 = @"Fire";
    
    arrayItems = [[NSArray alloc] initWithObjects:item1,item2,item3,item4, item5, nil];
    
    array = [[NSMutableString alloc] initWithCapacity:5];
    
    for (int i=0; i<arrayItems.count; i++) {
        [array appendString:[arrayItems objectAtIndex:i]];
        if (i<arrayItems.count -1) {
            [array appendString:@", "];
        }
    }
    
    //List Items Array for book
    listArray = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 330.0f, 320.0f, 50.0f)];
    
    if (listArray !=nil) {
        listArray.backgroundColor = [UIColor colorWithRed:0.541 green:0.373 blue:0.247 alpha:1] /*#8a5f3f*/;
        listArray.text = array;
        listArray.textAlignment = NSTextAlignmentCenter;
        listArray.textColor = [UIColor cyanColor];
        listArray.numberOfLines = 2;
    }
    [self.view addSubview:listArray];
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
