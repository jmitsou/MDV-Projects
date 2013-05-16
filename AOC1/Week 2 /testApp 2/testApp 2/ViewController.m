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
        authorName.text = @"Suzanne Collins";
        authorName.textAlignment = NSTextAlignmentLeft;
        authorName.textColor = [UIColor whiteColor];
    }
    [self.view addSubview:authorName];
    
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
