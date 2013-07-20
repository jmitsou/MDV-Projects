//
//  infoView.m
//  week2
//
//  Created by Jeff Mitsou on 7/20/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "infoView.h"

@interface infoView ()

@end

@implementation infoView

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(IBAction)close:(id)sender
{
    [self dismissViewControllerAnimated:TRUE completion:nil];
}

@end
