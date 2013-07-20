//
//  ViewController.h
//  week2
//
//  Created by Jeff Mitsou on 7/20/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "Restaurant.h"

@interface ViewController : UIViewController

{
    //buttons on main view
    IBOutlet UIButton *breakfastButton;
    IBOutlet UIButton *lunchButton;
    IBOutlet UIButton *dinnerButton;
    IBOutlet UIButton *infoButton;
    IBOutlet UIButton *sumButton;
    IBOutlet UIStepper *quantity;
    IBOutlet UILabel *label;
    
    //Textfield
    IBOutlet UITextField *textbox;
    
}
//changes the color of the background
-(IBAction)background:(id)sender;

//function for all button clicks
-(IBAction)onclick:(id)sender;

// incruments values
-(IBAction)onChange:(id)sender;

//switches main view to the second view
-(IBAction)showInfoPage:(id)sender;

//calculates the numbers
-(IBAction)sumUp:(id)sender;


@end
