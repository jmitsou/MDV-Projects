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
        bookTitle.backgroundColor = [UIColor colorWithRed:0.365 green:0.055 blue:0.035 alpha:1] /*#5d0e09*/;
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
        authorBlock.textColor = [UIColor whiteColor];
    }
    [self.view addSubview:authorBlock];
    
    //Author Name for book
    authorName = [[UILabel alloc] initWithFrame:CGRectMake(100.0f, 25.0f, 220.0f, 20.0f)];
    
    if (authorName !=nil) {
        authorName.backgroundColor = [UIColor colorWithRed:0.475 green:0.153 blue:0.165 alpha:1] /*#79272a*/;
        authorName.text = @" Suzanne Collins";
        authorName.textAlignment = NSTextAlignmentLeft;
        authorName.textColor = [UIColor whiteColor];
    }
    [self.view addSubview:authorName];
    
    //Publisher Label for book
    publisherBlock = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 50.0f, 100.0f, 20.0f)];
    
    if (publisherBlock !=nil) {
        publisherBlock.backgroundColor = [UIColor colorWithRed:0.475 green:0.153 blue:0.165 alpha:1] /*#79272a*/;
        publisherBlock.text = @"Published:";
        publisherBlock.textAlignment = NSTextAlignmentRight;
        publisherBlock.textColor = [UIColor whiteColor];
    }
    [self.view addSubview:publisherBlock];
    
    //Publisher Date for book
    publisherDate = [[UILabel alloc] initWithFrame:CGRectMake(100.0f, 50.0f, 220.0f, 20.0f)];
    
    if (publisherDate !=nil) {
        publisherDate.backgroundColor = [UIColor colorWithRed:0.475 green:0.153 blue:0.165 alpha:1] /*#79272a*/;
        publisherDate.text = @" June 2010";
        publisherDate.textAlignment = NSTextAlignmentLeft;
        publisherDate.textColor = [UIColor whiteColor];
    }
    [self.view addSubview:publisherDate];
    
    //Summary Label for book
    summaryBlock = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 75.0f, 100.0f, 20.0f)];
    
    if (summaryBlock !=nil) {
        summaryBlock.backgroundColor = [UIColor colorWithRed:0.475 green:0.153 blue:0.165 alpha:1] /*#79272a*/;
        summaryBlock.text = @"Summary:";
        summaryBlock.textAlignment = NSTextAlignmentLeft;
        summaryBlock.textColor = [UIColor whiteColor];
    }
    [self.view addSubview:summaryBlock];
    
    //Summary Paragraph for book
    summaryP = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 100.0f, 320.0f, 200.0f)];
    
    if (summaryP !=nil) {
        summaryP.backgroundColor = [UIColor colorWithRed:0.475 green:0.153 blue:0.165 alpha:1] /*#79272a*/;
        summaryP.text = @"The girl on Fire and her partner Pete have won the tournament. Their defiance against the rules of the annual game and rules in Capital city seems to be catching up to them. The promise of a save life and food for them and their families seems to be in danger. The Capital is angry and a rumor of rebellion puts The Capital of a road to revenge.";
        summaryP.textAlignment = NSTextAlignmentCenter;
        summaryP.textColor = [UIColor whiteColor];
        summaryP.numberOfLines = 10;
    }
    [self.view addSubview:summaryP];
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
